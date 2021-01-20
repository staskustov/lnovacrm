from django.contrib import admin
from django.urls import path

import mainapp.views as mainapp


urlpatterns = [
    path('admin/', admin.site.urls),
    path("", mainapp.main, name="main"),
    path('add_client/', mainapp.add_client, name="add_client"),
    path('add_realty/', mainapp.add_realty, name="add_realty"),
    path('calendar/', mainapp.calendar, name="calendar"),
    path('clients/', mainapp.clients, name="clients"),
    path('customization/', mainapp.customization, name="customization"),
    path('deal_card/', mainapp.deal_card, name="deal_card"),
    path('documents/', mainapp.documents, name="documents"),
    path('information/', mainapp.information, name="information"),
    path('mail/', mainapp.mail, name="mail"),
    path('marketing/', mainapp.marketing, name="marketing"),
    path('realty/', mainapp.realty, name="realty"),
    path('staff_list/', mainapp.staff_list, name="staff_list"),
    path('staff_profile/', mainapp.staff_profile, name="staff_profile"),
    path('statistics/', mainapp.statistics, name="statistics"),
    path('team/', mainapp.team, name="team"),
]
