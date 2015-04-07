define('Router', [
  'jquery',
  'jquery.storageapi',
  'underscore',
  'backbone',
  'HeaderView',
  'LoginView',
  'MainView',
  'ErrorView'
], function($, JqueryStorageApi, _, Backbone, HeaderView, LoginView, MainView, ErrorView) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            "": "main",
            "login": "login",
            "logout": "logout",
            "error/:type": "anyerror"
        },
        initialize : function (args) {
            console.log('init router');
            this.headerView = new HeaderView();
            this.loginView = new LoginView();
            this.mainView = new MainView();
            this.errorView = new ErrorView();
        },
        main: function(){
            console.log('main');
            var storage = $.localStorage;
            console.log(storage);
            if( storage.isEmpty('mpw.login')){
                this.navigate('login', true);
            }
            else {
                this.headerView.render();
                this.mainView.render();
            }
        },
        login: function() {
            this.headerView.render();
            this.loginView.render();
        },
        logout: function() {
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
