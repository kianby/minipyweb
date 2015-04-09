define('ErrorView', [
    'jquery',
    'backbone',
    'mustache',
    'text!template/error.html'
], function($, Backbone, Mustache, ErrorTpl) {

    var ErrorView = Backbone.View.extend({
        el : $("#content"),
        initialize : function () {
        },
        render : function (error) {
            var msg = 'Erreur de page';
            if( error == 'denied') {
                msg = 'Permission insuffisante pour accéder à cette page';
            }
            var renderedContent = Mustache.to_html(ErrorTpl, {message:msg});
            this.$el.html(renderedContent);
        }
    });
    return ErrorView;
});
