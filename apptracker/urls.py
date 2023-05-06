"""
URL configuration for apptracker project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from trackerapp import views
from django.conf.urls import url

router = routers.DefaultRouter()
# router.register(r'users', views.UsersView, 'users')
# router.register(r'application', views.ApplicationView, 'application')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('trackerapp/', include("trackerapp.urls") ),
    url(r'^api/application$', views.application_list),
    url(r'^api/application/(?P<pk>[0-9]+)$', views.application_detail),
    url(r'^api/users$', views.user_list),
    url(r'^api/users/(?P<pk>[0-9]+)$', views.users_detail),
    url(r'^api/notes$', views.notes_list),
    url(r'^api/notes/(?P<pk>[0-9]+)$', views.notes_detail),
    # path("api/", include(router.urls)),
]
