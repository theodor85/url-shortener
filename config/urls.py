from django.conf import settings
from django.contrib import admin
from django.urls import path, re_path

from rest_framework.routers import DefaultRouter

from great_url_shortener.main.views import UrlListViewSet, url_shortener, \
    url_redirector


router = DefaultRouter()
router.register('', UrlListViewSet)


urlpatterns = [
    path(settings.ADMIN_URL, admin.site.urls),
    path('shortener/', url_shortener),
    re_path(r'^(?P<hash_>.+)$', url_redirector),
]

urlpatterns += router.urls
