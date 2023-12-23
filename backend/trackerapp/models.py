# import pytz #to use this would have to install pytz first.

# from djongo import models
from django.db import models
from django.core.exceptions import ValidationError
from django.utils import timezone
from django.contrib.auth import get_user_model

# from datetime import datetime
# from django.core import validators
    
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
    application = models.ForeignKey(
        "Application", on_delete=models.CASCADE, related_name="notes")
    user_id = models.IntegerField()
    company = models.CharField(max_length=255)
    position = models.CharField(max_length=255)
    note = models.CharField(max_length=2048, blank=True, null=True)
    archived = models.BooleanField(default=False)
    last_archived = models.BooleanField(default=False)
    date_edited = models.DateTimeField(blank=True)
    date_created = models.DateTimeField(blank=True)

class Task(models.Model):
    task_id = models.AutoField(primary_key=True, null=False)
    user_id = models.IntegerField()
    application = models.ForeignKey(
        "Application", on_delete=models.CASCADE, related_name="tasks")
    title = models.CharField(max_length=255, null=False)
    # date_due = models.DateTimeField(validators=[validate_datetime_before_now])
    date_due = models.DateTimeField(null=False)
    company = models.CharField(max_length=255, null=False)
    position = models.CharField(max_length=255, null=False)
    date_edited = models.DateTimeField(blank=True, null=False)
    date_created = models.DateTimeField(blank=True, null=False)
    # section = models.CharField(max_length=255, blank=True, null=True)
    # priority = models.IntegerField()
    archived = models.BooleanField(default=False)
    last_archived = models.BooleanField(default=False)

    #this clean is to make sure the check only happens in post, code in views.py
    def clean(self):
        if timezone.now() > timezone.datetime.strptime(self.date_due, "%Y-%m-%dT%H:%M:%S.%fZ").replace(tzinfo=timezone.utc):
            raise ValidationError({"date_due": "Date must not be overdue."})

class Application(models.Model):
    application_id = models.AutoField(primary_key=True)
    user = models.ForeignKey(
        get_user_model(), on_delete=models.CASCADE, related_name="app_user")
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

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        self.notes.all().update(position=self.position, company=self.company)
        self.tasks.all().update(position=self.position, company=self.company)
        # Update archived field of all related notes when the application is saved
        if(self.archived == True):
            self.notes.all().update(archived=True)
            self.tasks.all().update(archived=True)
        else:
            for note in self.notes.all():
                note.archived = note.last_archived
                note.save()
            for task in self.tasks.all():
                task.archived = task.last_archived
                task.save()

