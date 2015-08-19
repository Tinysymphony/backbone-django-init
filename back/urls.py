from django.conf.urls import patterns, include, url

urlpatterns = patterns('',
    url(r'^tiny$', 'back.views.index'),
    url(r'^data$', 'back.views.tinyData'),
)
