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
            var storage = $.localStorage;
            this.userInfo = new UserModel();
            var that = this;
            // save user model to local storage
            this.userInfo.on('change', function() {
                console.log('save user to local storage');
                storage.set('mpw.login', {user: that.userInfo.get('user'), token: that.userInfo.get('token')});
            });
            this.headerView = new HeaderView({model: this.userInfo});
            this.loginView = new LoginView({model: this.userInfo});
            if( storage.isEmpty('mpw.login')){
                this.userInfo.set({user: '', token:''});
            } else {
                var info = storage.get('mpw.login');
                this.userInfo.set({user: info.user, token: info.token});
            }
            this.mainView = new MainView();
            this.errorView = new ErrorView();
        },
        main: function(){
            console.log('main');
            var storage = $.localStorage;
            if( this.userInfo.get('user')) {
                this.mainView.render();
            } else {
                this.navigate('login', true);
            }
        },
        login: function() {
            this.loginView.render();
        },
        logout: function() {
            this.userInfo.set({user:'', token:''});
            this.navigate('', true);
        },
        anyerror: function(type) {
            this.errorView.render(type);
        },
    });
    return AppRouter;
});
