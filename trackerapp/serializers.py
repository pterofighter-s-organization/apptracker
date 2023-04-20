from rest_framework import serializers
from .models import Users, Application

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('user_id', 'username', 'email', 'password')

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        fields = ('application_id','name', 'description', 'status'
                  , 'date', 'salary')

