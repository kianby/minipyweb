define('MainView', [
    'jquery',
    'backbone',
    'mustache',
    'text!template/navbar.html'
], function($, Backbone, Mustache, navbarTpl) {

    var MainView = Backbone.View.extend({
        el : $("#container"),
        initialize : function () {
            //this.template = $("#main_template").html();
        },
        render : function () {
            var renderedContent = Mustache.to_html(navbarTpl, {});
            this.$el.html(renderedContent);
        }
    });
    return MainView;
});
