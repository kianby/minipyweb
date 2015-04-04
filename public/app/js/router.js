var mpw = ( function (mpw) {
    mpw.Router.RoutesManager = Backbone.Router.extend({
        initialize : function (args) {
        },
        routes : {
            "hello" : "hello",
            "" : "root",
        },
        root : function () {
            loginView.render("S'authentifier", {"firstname":"Yannic", "lastname":"Arnoux"});
        },
        hello : function () {
            $(".hero-unit > h1").html("Hello World !!!");
        }
    });
    return mpw;
}(mpw));
