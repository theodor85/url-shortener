import uuid
import base64

from .models import Url


def generate_url_hash():
    while True:
        hash_ = base64.urlsafe_b64encode(uuid.uuid1().bytes)[:6].decode('utf-8')
        hash_exist = Url.objects.filter(url_hash=hash_)
        if hash_exist:
            continue
        return hash_
