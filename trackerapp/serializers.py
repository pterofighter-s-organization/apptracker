from rest_framework import serializers
from models import Users

class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('id', 'username', 'email', 'password')