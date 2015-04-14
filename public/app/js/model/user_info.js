define('UserInfoModel', [
    'jquery',
    'backbone',
    'localstorage',
], function($, Backbone, localstorage) {

  var UserInfoModel = Backbone.Model.extend({
    defaults: {
      user: '',
      token: ''
    },
    localStorage: new Backbone.LocalStorage("mpw.userinfo")
  });
  return UserInfoModel;
});
