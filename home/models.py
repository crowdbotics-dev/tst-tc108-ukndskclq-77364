from django.conf import settings
from django.db import models
class House(models.Model):
    'Generated Model'
    kitchen = models.CharField(max_length=256,)
