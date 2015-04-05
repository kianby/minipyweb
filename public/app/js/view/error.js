define('ErrorView', [
    'jquery',
    'backbone',
    'mustache',
], function($, Backbone, Mustache) {

    var ErrorView = Backbone.View.extend({
        el : $("#container"),
        initialize : function () {
            this.template = $("#error_template").html();
        },
        render : function (error) {
            var msg = 'Erreur de page';
            if( error == 'denied') {
                msg = 'Permission insuffisante pour accéder à cette page';
            }
            var renderedContent = Mustache.to_html(this.template, {message:msg});
            this.$el.html(renderedContent);
        }
    });
    return ErrorView;
});
