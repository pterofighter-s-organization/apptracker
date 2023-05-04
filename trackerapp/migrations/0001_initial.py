# Generated by Django 3.1 on 2023-05-04 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Application',
            fields=[
                ('application_id', models.AutoField(primary_key=True, serialize=False)),
                ('user_id', models.IntegerField()),
                ('name', models.CharField(max_length=255)),
                ('description', models.CharField(max_length=2048)),
                ('status', models.CharField(max_length=255)),
                ('date', models.DateField()),
                ('salary', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Notes',
            fields=[
                ('note_id', models.AutoField(primary_key=True, serialize=False)),
                ('application_id', models.IntegerField()),
                ('title', models.CharField(max_length=255)),
                ('note', models.CharField(max_length=2048)),
            ],
        ),
        migrations.CreateModel(
            name='Users',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('username', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=254)),
                ('password', models.CharField(max_length=255)),
            ],
        ),
    ]