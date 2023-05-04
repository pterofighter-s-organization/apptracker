from rest_framework import serializers
from .models import Users, Application, Notes

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('user_id', 'username', 'email', 'password')

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        fields = ('application_id','user_id','name', 'description', 'status'
                  , 'date', 'salary')

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('note_id', 'application_id', 'title', 'note')
        


