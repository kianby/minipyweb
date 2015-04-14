from bottle import route, abort
from app.models.user import User
from playhouse.shortcuts import model_to_dict
import logging

logger = logging.getLogger(__name__)


@route('/api/users')
def list_users(id):
    print('get users')
    users = []
    for user in User.select():
        users.append(model_to_dict(user))
    print(users)
    return users


@route('/api/users/<id>')
def get_user(id):
    user = User.get(User.username == id)
    if user is None:
        abort(404)
    else:
        return model_to_dict(user)
