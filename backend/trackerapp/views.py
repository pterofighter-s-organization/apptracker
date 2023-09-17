from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from trackerapp.models import Users
from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from .serializers import UsersSerializer, ApplicationSerializer, NotesSerializer, TaskSerializer
from .models import Users, Application, Notes, Task
import bcrypt

# Create your views here.
def index(request):
    return HttpResponse("Hello, world")

def test(request):
    return render(request, 'test.html')

@api_view(['GET', 'POST', 'DELETE'])
def application_list(request):
    #get list of applications, POST a new application, DELETE all applications
    if request.method == 'GET':
        applications = Application.objects.all()
        # title = request.GET.get('title', None)
        # if title is not None:
        #     applications = Application.filter(title__icontains=title)
        applications_serializer = ApplicationSerializer(applications, many=True)
        return JsonResponse(applications_serializer.data, safe=False)
    elif request.method == 'POST':
        application_data = JSONParser().parse(request)
        application_serializer = ApplicationSerializer(data=application_data)
        if application_serializer.is_valid():
            application_serializer.save()
            return JsonResponse(application_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(application_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
    

@api_view(['GET', 'POST', 'DELETE'])
def user_list(request):
    #get list of applications, POST a new application, DELETE all users
    if request.method == 'GET':
        users = Users.objects.all()
        users_serializer = UsersSerializer(users, many=True)
        return JsonResponse(users_serializer.data, safe=False)
    elif request.method == 'POST':
        users_data = JSONParser().parse(request)
        users_data['password'] = bcrypt.hashpw(users_data['password'].encode('utf-8'), bcrypt.gensalt()).decode('utf-8')
        users_serializer = UsersSerializer(data=users_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse(users_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def users_detail(request, pk):
    #find application by pk 
    try:
        user = Users.objects.get(pk=pk)
        #get an application
        if request.method == 'GET':
            users_serializer = UsersSerializer(user)
            return JsonResponse(users_serializer.data)
        #update an user 
        elif request.method == 'PUT':
            users_data = JSONParser().parse(request)
            users_serializer = UsersSerializer(user,data=users_data)
            if users_serializer.is_valid():
                users_serializer.save()
                return JsonResponse(users_serializer.data)
            return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        elif request.method == 'DELETE':
            item_to_delete = Users.objects.get(pk=pk)
            item_to_delete.delete()
            return JsonResponse({'message': 'User was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
    except Users.DoesNotExist:
        return JsonResponse({'message': 'The User does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['POST'])
def user_authenticate(request):
    try:
        user_data = JSONParser().parse(request)
        user = Users.objects.get(username=user_data['username'])
        password_matches = bcrypt.checkpw(user_data['password'].encode('utf-8'), user.password.encode('utf-8'))
        if password_matches:
            return JsonResponse({'message': 'password matches'}, status=status.HTTP_200_OK)
        return JsonResponse({'message': 'password does not match'}, status=status.HTTP_401_UNAUTHORIZED)
    except Users.DoesNotExist:
        return JsonResponse({'message': 'The User does not exist'}, status=status.HTTP_404_NOT_FOUND)

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
    except Users.DoesNotExist:
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
        if task_serializer.is_valid():
            task_serializer.save()
            return JsonResponse(task_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(task_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    except Users.DoesNotExist:
        return JsonResponse({'message': 'The Note does not exist'}, status=status.HTTP_404_NOT_FOUND)
    
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
