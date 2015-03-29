#!/usr/bin/python
# -*- coding: UTF-8 -*-

import calendar
import datetime
import jwt
import redis
import config
from app.models.user import User

import logging
logger = logging.getLogger(__name__)


def __authenticate(username, password):
    return User.get(User.username == username, User.password == password)


def __get_session_key(username, token):
    return 'SESSION_%s_%s' % (username, token)


def login(username, password):
    try:
        if __authenticate(username, password):
            now = datetime.datetime.utcnow()
            at = calendar.timegm(now.utctimetuple())
            # encode 'at' to get a different token per user connection
            token = jwt.encode({'user': username, 'at': at},
                               config.JWTSECRET,
                               algorithm='HS256').decode()
            # store session into REDIS
            r = redis.StrictRedis(host=config.REDIS_HOST,
                                  port=config.REDIS_PORT)
            r.setex(__get_session_key(username, token),
                    config.SESSION_TIMEOUT, now)
            return token
    except:
        logger.exception('login failed')
    return None


def validate(username, token):
    r = redis.StrictRedis(host=config.REDIS_HOST, port=config.REDIS_PORT)
    session = r.get(__get_session_key(username, token))
    # update session last used
    if session:
        now = datetime.datetime.utcnow()
        r.setex(__get_session_key(username, token),
                config.SESSION_TIMEOUT, now)
    return session
