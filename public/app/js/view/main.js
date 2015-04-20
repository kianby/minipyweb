define('MainView', [
    'jquery',
    'backbone',
    'handlebars',
    'text!template/main.html'
], function($, Backbone, Handlebars, MainTpl) {

    var MainView = Backbone.View.extend({
        el : $("#content"),
        initialize : function () {
          this.template = Handlebars.compile(MainTpl);
        },
        render : function () {
            var renderedContent = this.template({});
            this.$el.html(renderedContent);
        }
    });
    return MainView;
});
