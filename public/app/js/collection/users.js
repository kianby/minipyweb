define('UserCollection', [
    'jquery',
    'backbone',
    'UserModel',
], function($, Backbone, UserModel) {

  var UserCollection  = Backbone.Collection.extend({
    model : UserModel,
    root: '/api/users'
  });
  return UserCollection;
});
