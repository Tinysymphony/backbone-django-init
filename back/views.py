from django.shortcuts import render
from django.http import HttpResponse

# use template
from django.template.loader import get_template
from django.template import Context

# a more convenient method to render template
from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
import json
# Create your views here.

def index(request):
    return render_to_response('backbone/index.html', {'title': "backbone.js --- wytiny"})
    #html = get_template('backbone/index.html')
    #res = html.render(Context({'title': 'wytiny-backbone.js'}))
    #return HttpResponse(res)

@csrf_exempt
def tinyData(request):
	if(request.method=="POST"):
		req = json.loads(request.body)
		print req
		res = HttpResponse()
		res.write("ok")
		return res
