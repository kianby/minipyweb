#!/usr/bin/python
# -*- coding: UTF-8 -*-

from peewee import Model
from peewee import CharField
from app.services.database import get_db


class User(Model):
    username = CharField(unique=True)
    password = CharField()
    displayname = CharField()
    email = CharField(default='')

    class Meta:
        database = get_db()
