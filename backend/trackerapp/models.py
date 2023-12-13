# import pytz #to use this would have to install pytz first.

# from djongo import models
from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone
from django.contrib.auth.models import (
    BaseUserManager, AbstractUser
)

# from datetime import datetime
# from django.core import validators

def validate_datetime_before_now(value):
    #to use this would have to install pytz first. meant to test different timezones
    # local_timezone = datetime.now(pytz.timezone('UTC')).astimezone().tzinfo
    # value= value.astimezone(local_timezone)
    # current_datetime = timezone.now().astimezone(local_timezone)
    current_datetime = timezone.now()
    # print(current_datetime, value)
    if current_datetime > value:
        raise ValidationError("Can't provide overdue date and time.")
    
# # Create your models here.
# class Users(AbstractUser):
#     user_id = models.AutoField(primary_key=True)
#     # username = models.CharField(max_length=255)
#     # email = models.EmailField()
#     # password = models.CharField(max_length=255)
#     def __str__(self):
#         return self.username
    
class Notes(models.Model):
    note_id = models.AutoField(primary_key=True)
    application_id = models.IntegerField()
    position = models.CharField(max_length=255)
    note = models.CharField(max_length=2048, blank=True, null=True)
    archived = models.BooleanField(default=False)
    date_edited = models.DateTimeField(blank=True)
    date_created = models.DateTimeField(blank=True)
    
class Application(models.Model):
    application_id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    position = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    application_link = models.CharField(max_length=500, blank=True, null=True)
    resume_link = models.CharField(max_length=500, blank=True, null=True)
    cover_letter_link = models.CharField(max_length=500, blank=True, null=True)
    description = models.CharField(max_length=10000, blank=True, null=True)
    status = models.CharField(max_length=255)
    date_applied = models.DateTimeField(null=True, blank=True)
    date_edited = models.DateTimeField(blank=True)
    date_created = models.DateTimeField(blank=True)
    salary = models.CharField(max_length=255)
    salary_rate = models.CharField(max_length=255)
    archived = models.BooleanField(default=False)

class Task(models.Model):
    task_id = models.AutoField(primary_key=True, null=False)
    application_id = models.IntegerField(null=False)
    title = models.CharField(max_length=255, null=False)
    # date_due = models.DateTimeField(validators=[validate_datetime_before_now])
    date_due = models.DateTimeField(null=False)
    company = models.CharField(max_length=255, null=False)
    position = models.CharField(max_length=255, null=False)
    date_edited = models.DateTimeField(blank=True, null=False)
    date_created = models.DateTimeField(blank=True, null=False)
    # section = models.CharField(max_length=255, blank=True, null=True)
    # priority = models.IntegerField()
    archived = models.BooleanField(default=False, null=False)

    #this clean is to make sure the check only happens in post, code in views.py
    def clean(self):
        if timezone.now() > self.date_due:
            raise ValidationError({"date_due": "Date must not be overdue."})
        
    #making a method so it can perform clean before the save, communiating from view thru serializer.
    def custom_check(self):
        try:
            self.full_clean()
        except ValidationError as e:
            raise ValidationError(e)
