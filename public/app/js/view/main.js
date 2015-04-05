define('MainView', [
    'jquery',
    'backbone',
    'mustache',
], function($, Backbone, Mustache) {

    var MainView = Backbone.View.extend({
        el : $("#container"),
        initialize : function () {
            this.template = $("#main_template").html();
        },
        render : function () {
            var renderedContent = Mustache.to_html(this.template, {});
            this.$el.html(renderedContent);
        }
    });
    return MainView;
});
