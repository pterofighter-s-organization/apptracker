from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from trackerapp.models import Users
from rest_framework import viewsets, status
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from .serializers import UsersSerializer, ApplicationSerializer
from .models import Users, Application



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


@api_view(['GET', 'POST', 'DELETE'])
def application_detail(request, pk):
    #find application by pk 
    try:
        application = Application.objects.get(pk=pk)
        #get an application
        if request.method == 'GET':
            application_serializer = ApplicationSerializer(application)
            return JsonResponse(application_serializer.data)
        #update an application 
        elif request.method == 'POST':
            application_data = JSONParser.parse(request)
            application_serializer = ApplicationSerializer(data=application_data)
            if application_serializer.is_valid():
                application_serializer.save()
                return JsonResponse(application_serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(application_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
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
        users_serializer = UsersSerializer(data=users_data)
        if users_serializer.is_valid():
            users_serializer.save()
            return JsonResponse(users_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@api_view(['GET', 'POST', 'DELETE'])
def users_detail(request, pk):
    #find application by pk 
    try:
        user = Users.objects.get(pk=pk)
        #get an application
        if request.method == 'GET':
            users_serializer = UsersSerializer(user)
            return JsonResponse(users_serializer.data)
        #update an user 
        elif request.method == 'POST':
            users_data = JSONParser.parse(request)
            users_serializer = UsersSerializer(data=users_data)
            if users_serializer.is_valid():
                users_serializer.save()
                return JsonResponse(users_serializer.data, status=status.HTTP_201_CREATED)
            return JsonResponse(users_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    except Users.DoesNotExist:
        return JsonResponse({'message': 'The User does not exist'}, status=status.HTTP_404_NOT_FOUND)
    




# class UsersView(viewsets.ModelViewSet):
#     serializer_class = UsersSerializer
#     queryset = Users.objects.all()

# class ApplicationView(viewsets.ModelViewSet):
#     serializer_class = ApplicationSerializer
#     queryset = Application.objects.all()
