from rest_framework import serializers
from .models import Users, Application, Notes, Task

class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('user_id', 'username', 'email', 'password')

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        fields = ('application_id','user_id','position','company','interview_preparation', 'resume_link', 'cover_letter_link',
                  'description','status', 'date_applied', 'date_edited', 'date_created', 'salary')

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('note_id', 'application_id', 'title', 'note')

class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Task 
        fields = ('task_id', 'application_id', 'title', 'date_due')
        


