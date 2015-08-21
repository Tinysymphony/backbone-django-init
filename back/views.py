from django.shortcuts import render
from django.http import HttpResponse

# use template
from django.template.loader import get_template
from django.template import Context

# a more convenient method to render template
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
import json
import datetime as date
# Create your views here.

def index(request):
    return render_to_response('backbone/index.html', {'title': "backbone.js --- wytiny"})
    #html = get_template('backbone/index.html')
    #res = html.render(Context({'title': 'wytiny-backbone.js'}))
    #return HttpResponse(res)

@csrf_exempt
def tinyData(request):
    if(request.method=="POST"):
        print request.body
        req = json.loads(request.body)
        res = {'status': 'ok', 'time': date.datetime}
        return HttpResponse(req)
    elif(request.method=="GET"):
        res = [
        {'name': 'ter', 'power': 4500},
        {'name': 'cana', 'power': 4540}]
        return HttpResponse(json.dumps(res))
