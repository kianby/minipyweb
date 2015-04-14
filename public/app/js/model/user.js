define('UserModel', [
    'jquery',
    'backbone',
], function($, Backbone) {

  var UserModel = Backbone.Model.extend({
    defaults: {
      username: '',
      password: '',
      displayname: '',
      email: ''
    },
  });
  return UserModel;
});
