from djongo import models

# Create your models here.
class Users(models.Model):
    username = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    #add more to this later by pulling