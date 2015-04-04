define('Router', [
  'jquery',
  'underscore',
  'backbone',
  'LoginView'
], function($, _, Backbone, LoginView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "main"
        },
        initialize : function (args) {
        },
        main: function(){
            var view = new LoginView();
            view.render("S'authentifier", {"firstname":"Yannic", "lastname":"Arnoux"});
        }
    });
    return AppRouter;
});
