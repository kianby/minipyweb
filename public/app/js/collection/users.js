define('UserCollection', [
    'jquery',
    'backbone',
    'UserModel',
], function($, Backbone, UserModel) {

  var UserCollection  = Backbone.Collection.extend({
    url: '/api/users',
    model : UserModel,
  });
  return UserCollection;
});
