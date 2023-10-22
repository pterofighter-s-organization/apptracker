from rest_framework import serializers
from .models import Application, Notes, Task#, Users

# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = ('user_id', 'username', 'email', 'password')

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        fields = ('application_id','user_id','position','company','application_link', 'resume_link', 'cover_letter_link',
                  'description','status', 'date_applied', 'date_edited', 'date_created', 'salary', 'archived')
        extra_kwargs = {
            'date_applied': {
                'error_messages': {
                    'null': 'Please select all date elements before submitting.',
                }
            }
        }

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('note_id', 'application_id', 'note', 'archived')

class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Task 
        fields = ('task_id', 'application_id', 'title', 'date_due', 'company', 'position', 'priority', 'section', 'archived')
        extra_kwargs = {
            'date_due': {
                'error_messages': {
                    'null': 'Please select all date elements before submitting.',
                }
            }
        }
        


