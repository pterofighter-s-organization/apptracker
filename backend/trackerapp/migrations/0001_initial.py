# Generated by Django 4.1.9 on 2023-09-08 20:02

from django.db import migrations, models
import trackerapp.models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Application",
            fields=[
                ("application_id", models.AutoField(primary_key=True, serialize=False)),
                ("user_id", models.IntegerField()),
                ("position", models.CharField(max_length=255)),
                ("company", models.CharField(max_length=255)),
                (
                    "application_link",
                    models.CharField(blank=True, max_length=500, null=True),
                ),
                (
                    "resume_link",
                    models.CharField(blank=True, max_length=500, null=True),
                ),
                (
                    "cover_letter_link",
                    models.CharField(blank=True, max_length=500, null=True),
                ),
                (
                    "description",
                    models.CharField(blank=True, max_length=10000, null=True),
                ),
                ("status", models.CharField(max_length=255)),
                ("date_applied", models.DateTimeField(blank=True, null=True)),
                ("date_edited", models.DateTimeField(blank=True)),
                ("date_created", models.DateTimeField(blank=True)),
                ("salary", models.CharField(max_length=255)),
                ("archived", models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name="Notes",
            fields=[
                ("note_id", models.AutoField(primary_key=True, serialize=False)),
                ("application_id", models.IntegerField()),
                ("note", models.CharField(blank=True, max_length=2048, null=True)),
                ("archived", models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name="Task",
            fields=[
                ("task_id", models.AutoField(primary_key=True, serialize=False)),
                ("application_id", models.IntegerField()),
                ("title", models.CharField(max_length=255)),
                (
                    "date_due",
                    models.DateTimeField(
                        validators=[trackerapp.models.validate_datetime_before_now]
                    ),
                ),
                ("company", models.CharField(max_length=255)),
                ("position", models.CharField(max_length=255)),
                ("section", models.CharField(blank=True, max_length=255, null=True)),
                ("priority", models.IntegerField()),
                ("archived", models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name="Users",
            fields=[
                ("user_id", models.AutoField(primary_key=True, serialize=False)),
                ("username", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254)),
                ("password", models.CharField(max_length=255)),
            ],
        ),
    ]
