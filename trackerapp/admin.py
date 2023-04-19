from django.contrib import admin
from .models import Users, Application, Notes

# Register your models here.
class UsersAdmin(admin.ModelAdmin):
    pass

class ApplicationAdmin(admin.ModelAdmin):
    pass

class NotesAdmin(admin.ModelAdmin):
    pass



admin.site.register(Users, UsersAdmin)
admin.site.register(Application, ApplicationAdmin)
admin.site.register(Notes, NotesAdmin)