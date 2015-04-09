define('Router', [
  'jquery',
  'jquery.storageapi',
  'underscore',
  'backbone',
  'HeaderView',
  'LoginView',
  'MainView',
  'ErrorView',
  'UserModel',
], function($, JqueryStorageApi, _, Backbone, HeaderView, LoginView, MainView, ErrorView, UserModel) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'main',
            'login': 'login',
            'logout': 'logout',
            'error/:type': 'anyerror'
        },
        initialize : function (args) {
            console.log('### router initialize');
            var storage = $.localStorage;
            this.userInfo = new UserModel();
            this.headerView = new HeaderView({model: this.userInfo});
            this.loginView = new LoginView({model: this.userInfo});

            // set user info model
            if( storage.isEmpty('mpw.login')){
                this.userInfo.set({user: '', token:''});
            } else {
                var info = storage.get('mpw.login');
                this.userInfo.set({user: info.user, token: info.token});
            }
            this.mainView = new MainView();
            this.errorView = new ErrorView();

            // save user model to local storage on model change
            var that = this;
            this.userInfo.on('change', function() {
                console.log('save user info to local storage: user=' + that.userInfo.get('user'));
                storage.set('mpw.login', {user: that.userInfo.get('user'), token: that.userInfo.get('token')});
                if( that.userInfo.get('user')) {
                  that.navigate('main', true);
                } else {
                  that.navigate('login', true);
                }
            });
 
        },
        main: function(){
            this.mainView.render();
        },
        login: function() {
            this.loginView.render();
        },
        logout: function() {
            this.userInfo.set({user:'', token:''});
        },
        anyerror: function(type) {
            this.errorView.render(type);
        },
    });
    return AppRouter;
});
