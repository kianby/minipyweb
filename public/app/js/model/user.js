define('UserModel', [
    'jquery',
    'backbone',
], function($, Backbone) {

  var UserModel = Backbone.Model.extend({
    urlRoot: '/api/users',
    defaults: {
      username: '',
      password: '',
      displayname: '',
      email: ''
    },
  });
  return UserModel;
});
