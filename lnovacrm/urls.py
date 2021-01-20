from django.contrib import admin
from django.urls import path

import mainapp.views as mainapp

urlpatterns = [
    path('admin/', admin.site.urls),
    path("", mainapp.main),
    path('add_client/', mainapp.add_client),
    path('add_realty/', mainapp.add_realty),
    path('calendar/', mainapp.calendar),
    path('clients/', mainapp.clients),
    path('customization/', mainapp.customization),
    path('deal_card/', mainapp.deal_card),
    path('documents/', mainapp.documents),
    path('information/', mainapp.information),
    path('mail/', mainapp.mail),
    path('marketing/', mainapp.marketing),
    path('realty/', mainapp.realty),
    path('staff_list/', mainapp.staff_list),
    path('staff_profile/', mainapp.staff_profile),
    path('statistics/', mainapp.statistics),
    path('team/', mainapp.team),
]
