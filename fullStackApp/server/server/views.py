
from django.http import HttpResponse


def index(request):
    homepage=open("static/index.html").read()
    return HttpResponse(homepage)