define('MainView', [
    'jquery',
    'backbone',
    'mustache',
    'text!template/main.html'
], function($, Backbone, Mustache, mainTpl) {

    var MainView = Backbone.View.extend({
        el : $("#content"),
        initialize : function () {
        },
        render : function () {
            var renderedContent = Mustache.to_html(mainTpl, {});
            this.$el.html(renderedContent);
        }
    });
    return MainView;
});
