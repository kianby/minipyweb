define('Router', [
  'jquery',
  'jquery.storageapi',
  'underscore',
  'backbone',
  'LoginView',
  'MainView'
], function($, JqueryStorageApi, _, Backbone, LoginView, MainView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "main",
            "login": "login",
        },
        initialize : function (args) {
            console.log('init router');
            this.loginView = new LoginView();
            this.mainView = new MainView();
        },
        main: function(){
            console.log('storage');
            storage = $.localStorage;
            if( storage.isEmpty('mpw.login')){
                this.loginView.render();
                this.navigate('login');
            }
            else {
                this.mainView.render();
            }
        },
        login: function() {
            this.loginView.render();
        }
    });
    return AppRouter;
});
