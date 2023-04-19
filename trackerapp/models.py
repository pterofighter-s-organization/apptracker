from djongo import models

# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)

class Application(models.Model):
    application_id = models.ObjectIdField()
    user_id = models.ObjectIdField()
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=2048)
    status = models.CharField(max_length=255)
    date = models.DateField()
    salary = models.IntegerField()
    
class notes(models.Model):
    note_id = models.ObjectIdField()
    application_id = models.ObjectIdField()
    note = models.CharField(max_length=2048)
