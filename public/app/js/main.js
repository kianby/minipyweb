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
        'jquery.storageapi': '../lib/jquery/jquery.storageapi',
        'underscore': '../lib/underscore/underscore',
        'backbone': '../lib/backbone/backbone',
        'mustache': '../lib/mustache/mustache',
        'text': '../lib/requirejs/text',

        // Views
        'HeaderView'       : 'view/header',
        'LoginView'        : 'view/login',
        'MainView'         : 'view/main',
        'ErrorView'        : 'view/error',

        // Core 
        'App'              : 'app',
        'Router'           : 'router',
    },
});

require(['App'], function(App, Client) {
    App.initialize();
});
