from rest_framework import serializers
from .models import Application, Notes, Task#, Users

# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = "__all__"

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        fields = ('application_id','user_id','position','company','application_link', 'resume_link', 'cover_letter_link',
                  'description','status', 'date_applied', 'date_edited', 'date_created', 'salary', 'salary_rate', 'archived')
        extra_kwargs = {
            'date_applied': {
                'error_messages': {
                    'null': 'Please provide a complete date before submitting.',
                }
            }
        }

class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ('note_id', 'application_id', 'position', 'note', 'date_edited', 'date_created', 'archived')

class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Task 
        fields = ('task_id', 'application_id', 'title', 'date_due', 'company', 'position', 'date_edited', 'date_created', 'archived')
        extra_kwargs = {
            'date_due': {
                'error_messages': {
                    'null': 'Please provide a complete date before submitting.',
                }
            }
        }

    def custom_check(self, validated_data):
        #only in post
        instance = Task(**validated_data)
        instance.custom_check()



