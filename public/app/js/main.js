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
        //'backbone.localStorage': {
        //    deps: ['backbone'],
        //    exports: 'Backbone'
        //}
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
        'mustache': '../lib/mustache/mustache',
        //'backbone.localStorage': 'lib/backbone.localStorage'

        // Views
        'LoginView': 'view/login',

        // Core 
        'App'              : 'app',
        'Router'           : 'router',
    },
});

require(['App'], function(App, Client) {
    App.initialize();
});
