define('ErrorView', [
    'jquery',
    'backbone',
    'handlebars',
    'text!template/error.html'
], function($, Backbone, Handlebars, ErrorTpl) {

    var ErrorView = Backbone.View.extend({
        el : $("#content"),
        initialize : function () {
          this.template = Handlebars.compile(ErrorTpl);
        },
        render : function (error) {
            var msg = 'Erreur de page';
            if( error == 'denied') {
                msg = 'Permission insuffisante pour accéder à cette page';
            }
            var renderedContent = this.template({message:msg});
            this.$el.html(renderedContent);
        }
    });
    return ErrorView;
});
