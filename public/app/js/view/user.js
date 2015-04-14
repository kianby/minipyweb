define('UserView', [
    'jquery',
    'backbone',
    'mustache',
    'text!template/user.html'
], function($, Backbone, Mustache, UserTpl) {

    var UserView = Backbone.View.extend({
        el : $("#content"),
        initialize : function () {
          _.bindAll(this, 'render');
          this.collection.fetch();
          this.render();
        },
        render : function () {
            console.log('model attrs = ' + this.collection.toJSON());
            var renderedContent = Mustache.to_html(UserTpl, this.collection.toJSON());
            this.$el.html(renderedContent);
        }
    });
    return UserView;
});
