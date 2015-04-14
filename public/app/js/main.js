//the require library is configuring paths
require.config({
    // define shim for old browsers
    shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            //loads dependencies first
            deps: ['jquery', 'underscore'],
            //custom export name, this would be lowercase otherwise
            exports: 'Backbone'
        },
        'bootstrap': {
          deps: ['jquery'],
          exports: 'bootstrap'
        }
    },
    paths: {
        // Libs
        'jquery': '../lib/jquery/jquery',
        'underscore': '../lib/underscore/underscore',
        'backbone': '../lib/backbone/backbone',
        'localstorage': '../lib/backbone/backbone.localStorage',
        'mustache': '../lib/mustache/mustache',
        'text': '../lib/requirejs/text',

        // Models
        'UserInfoModel'    : 'model/user_info',
        'UserModel'        : 'model/user',

        // Collections
        'UserCollection'   : 'collection/users',

        // Views
        'HeaderView'       : 'view/header',
        'LoginView'        : 'view/login',
        'MainView'         : 'view/main',
        'ErrorView'        : 'view/error',
        'UserView'         : 'view/user',

        // Core 
        'App'              : 'app',
        'Router'           : 'router',
    },
});

require(['App'], function(App, Client) {
    App.initialize();
});
