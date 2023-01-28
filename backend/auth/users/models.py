from django.db import models

from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField


class User(AbstractUser):
    name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    phone_number = PhoneNumberField(unique=True, region="BD")
    is_admin = models.BooleanField(default=True)
    username = None
    USERNAME_FIELD = 'phone_number'

    REQUIRED_FIELDS = []
