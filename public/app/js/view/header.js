define('HeaderView', [
    'jquery',
    'jquery.storageapi',
    'backbone',
    'mustache',
    'text!template/navbar.html'
], function($, JqueryStorageApi, Backbone, Mustache, navbarTpl) {

    var HeaderView = Backbone.View.extend({
        el : $("#header"),
        initialize : function () {
        },
        // use events to render when necessary
        render : function () {
            var storage = $.localStorage;
            var user = {};
            if( !storage.isEmpty('mpw.login')) { 
              user = storage.get('mpw.login');
            }
            var content = Mustache.to_html(navbarTpl, user);
            this.$el.html(content);
        }
    });
    return HeaderView;
});
