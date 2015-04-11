define('UserModel', [
    'jquery',
    'backbone',
    'localstorage',
], function($, Backbone, localstorage) {

  var UserModel = Backbone.Model.extend({
    defaults: {
      user: '',
      token: ''
    },
    localStorage: new Backbone.LocalStorage("mpw.userinfo")
  });
  return UserModel;
});
