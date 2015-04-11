define('Router', [
  'jquery',
  'underscore',
  'backbone',
  'HeaderView',
  'LoginView',
  'MainView',
  'ErrorView',
  'UserModel',
], function($, _, Backbone, HeaderView, LoginView, MainView, ErrorView, UserModel) {

    var AppRouter = Backbone.Router.extend({
        routes: {
            '': 'main',
            'login': 'login',
            'logout': 'logout',
            'error/:type': 'anyerror'
        },
        initialize : function (args) {
            console.log('### router initialization ####');

            // retrieve user info from local storage
            this.userInfo = new UserModel({id:1});
            this.userInfo.fetch();
            console.log('read user info ' + JSON.stringify(this.userInfo));

            // create singleton views
            this.headerView = new HeaderView({model: this.userInfo});
            this.loginView = new LoginView({model: this.userInfo});

            this.mainView = new MainView();
            this.errorView = new ErrorView();

            // save user model to local storage on model change
            var that = this;
            this.userInfo.on('change', function() {
                console.log('save user info ' + JSON.stringify(that.userInfo));
                that.userInfo.save();
                Backbone.trigger('nav:route', '');
            });
 
            this.listenTo(Backbone, 'nav:route', this.navigateToAndTrigger);

        },
        main: function() {
          if (this.userInfo.get('user')) {
            console.log('render main view');
            this.mainView.render();
          } else {
            this.navigateToAndTrigger('login');
          }
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
        navigateToAndTrigger: function(url) {
          console.log('navigate and trigger: ' + url);
          this.navigate(url, {trigger: true});
        }
    });
    return AppRouter;
});
