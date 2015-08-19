from django.shortcuts import render
from django.http import HttpResponse
from django.template.loader import get_template
from django.template import Context
# Create your views here.

def index(request):
	html = get_template('backbone/index.html')
	res = html.render(Context({'title': 'wytiny-backbone.js'}))
	return HttpResponse(res)
