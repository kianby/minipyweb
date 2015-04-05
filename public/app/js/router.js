define('Router', [
  'jquery',
  'jquery.storageapi',
  'underscore',
  'backbone',
  'LoginView',
  'MainView',
  'ErrorView'
], function($, JqueryStorageApi, _, Backbone, LoginView, MainView, ErrorView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "main",
            "login": "login",
            "logoff": "logoff",
            "error/:type": "anyerror"
        },
        initialize : function (args) {
            console.log('init router');
            this.loginView = new LoginView();
            this.mainView = new MainView();
            this.errorView = new ErrorView();
        },
        main: function(){
            storage = $.localStorage;
            if( storage.isEmpty('mpw.login')){
                this.navigate('login', true);
            }
            else {
                this.mainView.render();
            }
        },
        login: function() {
            this.loginView.render();
        },
        logoff: function() {
            storage = $.localStorage;
            if( storage.isSet('mpw.login')) { 
                storage.remove('mpw.login');
            }
            this.navigate('', true);
        },
        anyerror: function(type) {
            this.errorView.render(type);
        },
    });
    return AppRouter;
});
