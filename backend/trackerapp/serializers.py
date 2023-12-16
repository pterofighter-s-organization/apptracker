from rest_framework import serializers
from .models import Application, Notes, Task#, Users

# class UsersSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = Users
#         fields = "__all__"

class ApplicationSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Application
        fields = ('application_id','user','position','company','application_link', 'resume_link', 'cover_letter_link',
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
        fields = ('note_id', 'application', 'user_id', 'position', 'note', 'date_edited', 'date_created', 'archived', 'last_archived')

class TaskSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Task 
        fields = ('task_id', 'application', 'user_id', 'title', 'date_due', 'company', 'position', 'date_edited', 'date_created', 'archived', 'last_archived')
        extra_kwargs = {
            'date_due': {
                'error_messages': {
                    'null': 'Please provide a complete date before submitting.',
                }
            }
        }

    def post_date_due_check(self, validated_data):
        # Now create the Task instance and perform custom checks
        instance = Task(**validated_data)
        instance.clean()

    def post_application_check(self, validated_data):
        # Get the Application instance using the provided application ID
        application_id = validated_data.get('application')
        try:
            application_instance = Application.objects.get(pk=application_id)
        except Application.DoesNotExist:
            raise serializers.ValidationError({'application': 'Invalid application ID'})

        # Update the 'application' field in validated_data with the Application instance
        validated_data['application'] = application_instance



