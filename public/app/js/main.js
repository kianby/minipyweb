// libs
head.load("lib/jquery/jquery.js")
head.load("lib/underscore/underscore.js")
head.load("lib/backbone/backbone.js")
head.load("lib/mustache/mustache.js")
head.load("lib/bootstrap/bootstrap.js")

// views
head.load("js/view/login.js")

// routes
head.load("js/router.js")

// app
head.ready(function() {
    console .log("Lauching application ...");

    window.loginView = new mpw.Views.LoginView();

    window.router = new mpw.Router.RoutesManager({});

    Backbone.history .start();
});

