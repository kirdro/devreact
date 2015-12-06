from django.conf.urls import  url
import views

urlpatterns = [
    url(r'^add_comment/$', views.add_comment),
    url(r'^comments/$', views.comments),
]