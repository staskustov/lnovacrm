from django.shortcuts import render

def main(request):
    return render(request, 'mainapp/index.html')

def add_realty(request):
    return render(request, 'mainapp/add_realty.html')

def add_client(request):
    return render(request, 'mainapp/add_client.html')

def calendar(request):
    return render(request, 'mainapp/calendar.html')

def clients(request):
    return render(request, 'mainapp/clients.html')

def customization(request):
    return render(request, 'mainapp/customization.html')

def deal_card(request):
    return render(request, 'mainapp/deal_card.html')

def documents(request):
    return render(request, 'mainapp/documents.html')

def information(request):
    return render(request, 'mainapp/informationx.html')

def mail(request):
    return render(request, 'mainapp/mail.html')

def marketing(request):
    return render(request, 'mainapp/marketing.html')

def realty(request):
    return render(request, 'mainapp/realty.html')

def staff_list(request):
    return render(request, 'mainapp/staff_list.html')

def staff_profile(request):
    return render(request, 'mainapp/staff_profile.html')

def statistics(request):
    return render(request, 'mainapp/statistics.html')

def team(request):
    return render(request, 'mainapp/team.html')