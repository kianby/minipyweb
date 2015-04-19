define('UserView', [
    'jquery',
    'backbone',
    'mustache',
    'text!template/user.html'
], function($, Backbone, Mustache, UserTpl) {

    var UserView = Backbone.View.extend({
        el : $("#content"),
        initialize : function (options) {
          this.options = options || {};
          _.bindAll(this, 'render');
          console.log(this.collection);
          console.log(this.options.userInfo.get('user'));
          console.log(this.options.userInfo.get('token'));
          var that = this;
          this.collection.fetch({
            headers: {
              'User': this.options.userInfo.get('user'),
              'Token': this.options.userInfo.get('token')
            },
            success: function(){
              console.log('collection loaded');
              _.each(that.collection, function(u) {
                console.log(u);
                console.log(u.displayName);
              });
              that.render();
            },
            error: function() {
              console.log('collection loading failed');
            }
          });
        },
        render : function () {
            console.log('model attrs = ' + this.collection.toJSON());
            var renderedContent = Mustache.to_html(UserTpl, this.collection.toJSON());
            this.$el.html(renderedContent);
        }
    });
    return UserView;
});
