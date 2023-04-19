from django.shortcuts import render
from django.http import HttpResponse
# from trackerapp.models import Users

# Create your views here.
def index(request):
    return HttpResponse("Hello, world")

def test(request):
    # user = Users(username = "test1", email = "testemail@gmail.com", password = "1234")
    # user.save()
    return render(request, 'test.html')
