from bottle import route, abort
from bottle import response
from json import dumps
from app.models.user import User
from playhouse.shortcuts import model_to_dict
import logging

logger = logging.getLogger(__name__)


@route('/api/users')
def list_users():
    print('get users')
    users = []
    for user in User.select():
        users.append(model_to_dict(user))
    print(users)
    # returning arrays is not recommended
    # see http://stackoverflow.com/questions/12293979/how-do-i-return-a-json-array-with-bottle
    response.content_type = 'application/json'
    return dumps(users)


@route('/api/users/<id>')
def get_user(id):
    user = User.get(User.username == id)
    if user is None:
        abort(404)
    else:
        return model_to_dict(user)
