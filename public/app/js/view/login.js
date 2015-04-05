define('LoginView', [
    'jquery',
    'jquery.storageapi',
    'backbone',
    'mustache',
], function($, JqueryStorageApi, Backbone, Mustache) {

    var LoginView = Backbone.View.extend({
        el : $("#container"),
        initialize : function () {
            this.template = $("#login_template").html();
        },
        render : function (message) {
            var renderedContent = Mustache.to_html(this.template, {message: message});
            this.$el.html(renderedContent);
        },
        events : {
            "click .btn-primary" : "onClickBtnLogin",
        },
        onClickBtnLogin : function (domEvent) {
            var fields = $("#login_form :input")
                    , that = this;
            userinfo = {'username': fields[0].value, 'password': fields[1].value};
            console.log(userinfo);
            $.ajax({
                type:"POST",
                url:"/login",
                data : JSON.stringify(userinfo),
                contentType: "application/json",
                dataType : "json",
                error: function (err){ console.log(err); },
                success: function (dataFromServer) {
                    if (dataFromServer.token) {
                        // save login info in local storage
                        storage = $.localStorage;
                        storage.set('mpw.login', {'user': fields[0].value, 'token': dataFromServer.token})
                        window.location.replace('#');
                    } else {
                        console.log('missing token in server response');
                    }
                }
            });
        }
    });
    return LoginView;
});
