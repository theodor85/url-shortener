from django.apps import AppConfig
from django.utils.translation import gettext_lazy as _


class UsersConfig(AppConfig):
    name = "great_url_shortener.users"
    verbose_name = _("Users")

    def ready(self):
        try:
            import great_url_shortener.users.signals  # noqa F401
        except ImportError:
            pass
