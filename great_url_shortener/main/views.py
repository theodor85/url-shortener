from django.http import HttpResponseRedirect

from rest_framework import viewsets, mixins
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

from .models import Url
from .serializers import UrlSerializer
from .hash_generator import generate_url_hash


class UrlListViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
    serializer_class = UrlSerializer
    queryset = Url.objects.all()


@api_view(['POST'])
def url_shortener(request):
    try:
        origin_uri = request.data['origin_uri']
    except KeyError:
        return Response(status=status.HTTP_400_BAD_REQUEST)

    url, is_created = Url.objects.get_or_create(url=origin_uri)

    if is_created:
        url.url_hash = generate_url_hash()
        url.save()
        short_url = url.short_url
        response_status = status.HTTP_201_CREATED
    else:
        short_url = url.short_url
        response_status = status.HTTP_200_OK

    return Response(
        data={
            'origin_uri': origin_uri,
            'short_url': short_url,
        },
        status=response_status,
    )


@api_view(['GET'])
def url_redirector(request, hash_):
    try:
        url = Url.objects.get(url_hash=hash_)
    except Url.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    url = url.url
    return HttpResponseRedirect(url)
