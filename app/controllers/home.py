#!/usr/bin/python
# -*- coding: UTF-8 -*-

from bottle import route, request, abort, redirect, static_file

import logging
logger = logging.getLogger(__name__)


@route('/heartbeat', method='GET')
def heartbeat():
    logger.info('hearbeat level INFO')
    logger.debug('hearbeat level DEBUG')
    return "OK"


@route('/api', method='GET')
def get_api():
    return "1.0"


@route('/', method='GET')
def home():
    redirect('/app/index.html')


@route('/app/<filepath:path>')
def static(filepath):
    return static_file(filepath, root='public/app/')


@route('/login', method='POST')
def login(auth):
    username = request.json.get('username')
    password = request.json.get('password')
    token = auth.login(username, password)
    if token:
        return {'token': token}
    else:
        abort(401, 'invalid username or password')
