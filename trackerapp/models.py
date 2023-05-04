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
    title = models.CharField(max_length=255)
    note = models.CharField(max_length=2048)

    

class Application(models.Model):
    application_id = models.AutoField(primary_key=True)
    user_id = models.IntegerField()
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=2048)
    status = models.CharField(max_length=255)
    date = models.DateField()
    salary = models.IntegerField()
    
