from django.db import models

HOST_NAME = 'http://0.0.0.0:8000/'


class Url(models.Model):
    url = models.URLField(db_index=True)
    url_hash = models.CharField(max_length=6, unique=True, db_index=True)

    @property
    def short_url(self):
        return HOST_NAME + self.url_hash
