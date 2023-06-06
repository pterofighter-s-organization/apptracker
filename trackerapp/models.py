# import pytz #to use this would have to install pytz first.

# from djongo import models
from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone

# from datetime import datetime
# from django.core import validators
    
def validate_datetime_before_now(value):
    #to use this would have to install pytz first. meant to test different timezones
    # local_timezone = datetime.now(pytz.timezone('UTC')).astimezone().tzinfo
    # value= value.astimezone(local_timezone)
    # current_datetime = timezone.now().astimezone(local_timezone)
    current_datetime = timezone.now()
    print(current_datetime, value)
    if current_datetime > value:
        raise ValidationError("The datetime must be before the current date and time.")

# Create your models here.
class Users(models.Model):
    user_id = models.AutoField(primary_key=True)
    username = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=255)
    def __str__(self):
        return self.name
    
class Notes(models.Model):
    note_id = models.AutoField(primary_key=True)
    application_id = models.IntegerField()
    note = models.CharField(max_length=2048, blank=True, null=True)
    archived = models.BooleanField(default=False)
    
class Application(models.Model):
    application_id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    position = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    interview_preparation = models.CharField(max_length=255, blank=True, null=True)
    resume_link = models.CharField(max_length=255, blank=True, null=True)
    cover_letter_link = models.CharField(max_length=255, blank=True, null=True)
    description = models.CharField(max_length=2048, blank=True, null=True)
    status = models.CharField(max_length=255)
    date_applied = models.DateTimeField(null=True, blank=True)
    date_edited = models.DateTimeField(blank=True)
    date_created = models.DateTimeField(blank=True)
    salary = models.CharField(max_length=255)
    archived = models.BooleanField(default=False)

class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    application_id = models.IntegerField()
    title = models.CharField(max_length=255)
    date_due = models.DateTimeField(validators=[validate_datetime_before_now])
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    section = models.CharField(max_length=255, blank=True, null=True)
    priority = models.IntegerField()
