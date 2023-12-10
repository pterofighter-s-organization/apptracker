from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
# from trackerapp.models import Users
from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from .serializers import ApplicationSerializer, NotesSerializer, TaskSerializer#, UserSerializer
from .models import Application, Notes, Task#, Users
from django.core.exceptions import ValidationError
from django.views.decorators.csrf import csrf_protect, csrf_exempt
import bcrypt



@api_view(['GET', 'POST', 'DELETE'])
@csrf_protect
def application_list(request):
    #get list of applications, POST a new application, DELETE all applications
    if not request.user.is_authenticated:
        return JsonResponse({'message': 'You Are Not Allowed'},status=status.HTTP_401_UNAUTHORIZED)
    if request.method == 'GET':
        if request.user.is_authenticated:
            applications = Application.objects.all()
            # title = request.GET.get('title', None)
            # if title is not None:
            #     applications = Application.filter(title__icontains=title)
            applications_serializer = ApplicationSerializer(applications, many=True)
            return JsonResponse(applications_serializer.data, safe=False)
    elif request.method == 'POST':
        #application_data = JSONParser().parse(request.data)
        application_data = request.data
        #if request.user.is_authenticated:
            # application_data = JSONParser().parse(request)
        application_data['user_id'] = request.user.id
        application_serializer = ApplicationSerializer(data=application_data)
        if application_serializer.is_valid():
            application_serializer.save()
            return JsonResponse(application_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse({'message': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def application_detail(request, pk):
    #find application by pk 
    try:
        application = Application.objects.get(pk=pk)
        #get an application
        if request.method == 'GET':
            application_serializer = ApplicationSerializer(application)
            return JsonResponse(application_serializer.data)
        #update an application 
        elif request.method == 'PUT':
            application_data = JSONParser().parse(request)
            application_serializer = ApplicationSerializer(application, data=application_data)
            if application_serializer.is_valid():
                application_serializer.save()
                return JsonResponse(application_serializer.data)
            return JsonResponse(application_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            item_to_delete = Application.objects.get(pk=pk)
            item_to_delete.delete()
            return JsonResponse({'message': 'Application was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    except Application.DoesNotExist:
        return JsonResponse({'message': 'The application does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
# Olde User method
# @api_view(['GET', 'POST', 'DELETE'])
# def user_list(request):
#     #get list of applications, POST a new application, DELETE all users
#     if request.method == 'GET':
#         users = Users.objects.all()
#         users_serializer = UsersSerializer(users, many=True)
#         return JsonResponse(users_serializer.data, safe=False)
#     elif request.method == 'POST':
#         users_data = JSONParser().parse(request)
#         users_data['password'] = bcrypt.hashpw(users_data['password'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
#         users_serializer = UsersSerializer(data=users_data)
#         if users_serializer.is_valid():
#             users_serializer.save()
#             return JsonResponse(users_serializer.data, status=status.HTTP_201_CREATED)
#         return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#TODO: make it error when creating user with same username
#Creates a user
@api_view(['GET', 'POST', 'DELETE'])
def user_list(request):
    if request.method == 'POST':
        users_data = JSONParser().parse(request)
        username = users_data['username']
        password = users_data['password']
        user = User.objects.create_user(username=username, password=password)
        return JsonResponse({"username":user.username,"password": user.password},status=status.HTTP_201_CREATED)


#TODO: maybe change this in the future to take a session token 
#to do stuff after adding the authenticate function
#check if password actually changes
@api_view(['GET', 'PUT', 'DELETE'])
def users_detail(request, pk):
    try:
        user = User.objects.get(id = pk)
        if request.method == 'GET':
            return JsonResponse({"username":user.username,"email": user.email,"password": user.password},status=status.HTTP_201_CREATED)
        if request.method == 'PUT':
            users_data = JSONParser().parse(request)
            if 'email' in users_data:
                user.email = users_data['email']
            if 'password' in users_data:
                user.set_password = users_data['password']
            user_json = {"username": user.username, "email": user.email, "password": user.password}
            user.save()
            return JsonResponse(user_json)
    except:
        return JsonResponse({'message': 'The User does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
#TODO: LEARN MORE ABOUT CSRF TOKEN AND IMPLEMENT THEM PROPERLY
@api_view(['POST', 'DELETE'])
def users_authentication(request):
    if request.method == 'POST':
        users_data = JSONParser().parse(request)
        user = authenticate(username = users_data['username'], password = users_data['password'])
        if user is not None:
            if user.is_active:
                login(request, user)
                return JsonResponse({'message': 'Successfully logined'}, status=status.HTTP_200_OK)
        return JsonResponse({'message': 'Wrong username or password'}, status=status.HTTP_401_UNAUTHORIZED)
    elif request.method == 'DELETE':
        if request.user.is_authenticated:
            logout(request)
            return JsonResponse({'message': 'Successfully logouted'}, status=status.HTTP_200_OK)
        else:
            return JsonResponse({'message': 'Cannot find user'}, status=status.HTTP_404_NOT_FOUND)
    return JsonResponse({'message': 'No clue what happened'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)



# @api_view(['GET', 'PUT', 'DELETE'])
# def users_detail(request, pk):
#     #find application by pk 
#     try:
#         user = Users.objects.get(pk=pk)
#         #get an application
#         if request.method == 'GET':
#             users_serializer = UsersSerializer(user)
#             return JsonResponse(users_serializer.data)
#         #update an user 
#         elif request.method == 'PUT':
#             users_data = JSONParser().parse(request)
#             users_serializer = UsersSerializer(user,data=users_data)
#             if users_serializer.is_valid():
#                 users_serializer.save()
#                 return JsonResponse(users_serializer.data)
#             return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
#         elif request.method == 'DELETE':
#             item_to_delete = Users.objects.get(pk=pk)
#             item_to_delete.delete()
#             return JsonResponse({'message': 'User was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
#     except Users.DoesNotExist:
#         return JsonResponse({'message': 'The User does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
# @api_view(['POST'])
# def user_authenticate(request):
#     try:
#         user_data = JSONParser().parse(request)
#         user = Users.objects.get(username=user_data['username'])
#         password_matches = bcrypt.checkpw(user_data['password'].encode('utf-8'), user.password.encode('utf-8'))
#         if password_matches:
#             return JsonResponse({'message': 'password matches'}, status=status.HTTP_200_OK)
#         return JsonResponse({'message': 'password does not match'}, status=status.HTTP_401_UNAUTHORIZED)
#     except Users.DoesNotExist:
#         return JsonResponse({'message': 'The User does not exist'}, status=status.HTTP_404_NOT_FOUND)

@api_view(['GET', 'POST', 'DELETE'])
def notes_list(request):
    #get list of applications, POST a new application, DELETE all applications
    if request.method == 'GET':
        notes = Notes.objects.all()
        notes_serializer = NotesSerializer(notes, many=True)
        return JsonResponse(notes_serializer.data, safe=False)
    elif request.method == 'POST':
        notes_data = JSONParser().parse(request)
        notes_serializer = NotesSerializer(data=notes_data)
        if notes_serializer.is_valid():
            notes_serializer.save()
            return JsonResponse(notes_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(notes_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def notes_detail(request, pk):
    #find application by pk 
    try:
        note = Notes.objects.get(pk=pk)
        #get an application
        if request.method == 'GET':
            notes_serializer = NotesSerializer(note)
            return JsonResponse(notes_serializer.data)
        #update an user 
        elif request.method == 'PUT':
            notes_data = JSONParser().parse(request)
            notes_serializer = NotesSerializer(note,data=notes_data)
            if notes_serializer.is_valid():
                notes_serializer.save()
                return JsonResponse(notes_serializer.data)
            return JsonResponse(notes_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            item_to_delete = Notes.objects.get(pk=pk)
            item_to_delete.delete()
            return JsonResponse({'message': 'Note was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    except Notes.DoesNotExist:
        return JsonResponse({'message': 'The Note does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
def notes_list_application(request, app_id):
    notes = Notes.objects.filter(application_id=app_id)

    if request.method  == 'GET':
        notes_serializer = NotesSerializer(notes, many=True)
        return JsonResponse(notes_serializer.data, safe=False)

@api_view(['GET', 'POST', 'DELETE'])
def task_list(request):
    #get list of applications, POST a new application, DELETE all applications
    if request.method == 'GET':
        tasks = Task.objects.all()
        task_serializer = TaskSerializer(tasks, many=True)
        return JsonResponse(task_serializer.data, safe=False)
    elif request.method == 'POST':
        task_data = JSONParser().parse(request)
        task_serializer = TaskSerializer(data=task_data)
        if task_serializer.is_valid(raise_exception=True):
            try:
                #only in post, sending in the data to give it a check.
                task_serializer.custom_check(task_data)
            except ValidationError as e:
                return JsonResponse({**task_serializer.errors, **e.message_dict}, status=status.HTTP_400_BAD_REQUEST)
            task_serializer.save()
            return JsonResponse(task_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        #     return JsonResponse(task_serializer.data, status=status.HTTP_201_CREATED)
        # return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def task_detail(request, pk):
    #find application by pk 
    try:
        task = Task.objects.get(pk=pk)
        #get an application
        if request.method == 'GET':
            task_serializer = TaskSerializer(task)
            return JsonResponse(task_serializer.data)
        #update an user 
        elif request.method == 'PUT':
            task_data = JSONParser().parse(request)
            task_serializer = TaskSerializer(task,data=task_data)
            if task_serializer.is_valid():
                task_serializer.save()
                return JsonResponse(task_serializer.data)
            return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            item_to_delete = Task.objects.get(pk=pk)
            item_to_delete.delete()
            return JsonResponse({'message': 'Task was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    except Task.DoesNotExist:
        return JsonResponse({'message': 'The Task does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
def task_list_application(request, app_id):
    tasks = Task.objects.filter(application_id=app_id)

    if request.method  == 'GET':
        tasks_serializer = TaskSerializer(tasks, many=True)
        return JsonResponse(tasks_serializer.data, safe=False)



# class UsersView(viewsets.ModelViewSet):
#     serializer_class = UsersSerializer
#     queryset = Users.objects.all()

# class ApplicationView(viewsets.ModelViewSet):
#     serializer_class = ApplicationSerializer
#     queryset = Application.objects.all()
