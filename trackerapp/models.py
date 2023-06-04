# from djongo import models
from django.db import models

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
    date_applied = models.CharField(max_length=255, blank=True)
    date_edited = models.CharField(max_length=255)
    date_created = models.CharField(max_length=255)
    salary = models.CharField(max_length=255)
    archived = models.BooleanField(default=False)

class Task(models.Model):
    task_id = models.AutoField(primary_key=True)
    application_id = models.IntegerField()
    title = models.CharField(max_length=255)
    date_due = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    section = models.CharField(max_length=255, blank=True, null=True)
    priority = models.IntegerField()
    
