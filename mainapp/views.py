import os
from django.shortcuts import render
from django.conf import settings

def main(request):
    title = "Главная"
    content = {'title': title}
    return render(request, 'mainapp/index.html', content)

def add_realty(request):
    title = "Карточка объекта"
    content = {'title': title}
    return render(request, 'mainapp/add_realty.html', content)

def add_client(request):
    title = "Карточка клиента"
    content = {'title': title}
    return render(request, 'mainapp/add_client.html', content)

def calendar(request):
    title = "Календарь"
    content = {'title': title}
    return render(request, 'mainapp/calendar.html', content)

def clients(request):
    title = "Клиенты"
    content = {'title': title}
    return render(request, 'mainapp/clients.html', content)

def customization(request):
    title = "Настройки"
    content = {'title': title}
    return render(request, 'mainapp/customization.html', content)

def deal_card(request):
    title = "Карточка сделки"
    content = {'title': title}
    return render(request, 'mainapp/deal_card.html', content)

def documents(request):
    title = "Документы"
    content = {'title': title}
    return render(request, 'mainapp/documents.html', content)

def information(request):
    title = "Информация"
    content = {'title': title}
    return render(request, 'mainapp/information.html', content)

def mail(request):
    title = "Почта"
    content = {'title': title}
    return render(request, 'mainapp/mail.html', content)

def marketing(request):
    title = "Реклама"
    content = {'title': title}
    return render(request, 'mainapp/marketing.html', content)

def realty(request):
    title = "Недвижимость"
    content = {'title': title}
    return render(request, 'mainapp/realty.html', content)

def staff_list(request):
    title = "Сотрудники"
    content = {'title': title}
    return render(request, 'mainapp/staff_list.html', content)

def staff_profile(request):
    title = "Личный профиль"
    content = {'title': title}
    return render(request, 'mainapp/staff_profile.html', content)

def statistics(request):
    title = "Статистика"
    content = {'title': title}
    return render(request, 'mainapp/statistics.html', content)

def team(request):
    title = "Команда"
    content = {'title': title}
    return render(request, 'mainapp/team.html', content)