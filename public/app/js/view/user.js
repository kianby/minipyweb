define('UserView', [
    'jquery',
    'backbone',
    'handlebars',
    'text!template/user.html'
], function($, Backbone, Handlebars, UserTpl) {

    var UserView = Backbone.View.extend({
        el : $("#content"),
        initialize : function (options) {
          this.options = options || {};
          _.bindAll(this, 'render');
          this.template = Handlebars.compile(UserTpl);
          //console.log(this.collection);
          //console.log(this.options.userInfo.get('user'));
          //console.log(this.options.userInfo.get('token'));
          var that = this;
          this.collection.fetch({
            headers: {
              'User': this.options.userInfo.get('user'),
              'Token': this.options.userInfo.get('token')
            },
            success: function(){
              console.log('collection loaded');
              _(that.collection.models).each(function(item) {
                console.log('model: ' + item.get('displayname'));
              });
              that.render();
            },
            error: function() {
              console.log('collection loading failed');
            }
          });
        },
        render : function () {
            var context = {
              items: this.collection.models
            };
            var renderedContent = this.template(this.collection.toJSON());
            this.$el.html(renderedContent);
        }
    });
    return UserView;
});
