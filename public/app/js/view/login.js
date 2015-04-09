define('LoginView', [
    'jquery',
    'backbone',
    'mustache',
    'text!template/login.html'
], function($, Backbone, Mustache, LoginTpl) {

    var LoginView = Backbone.View.extend({
        el : $("#content"),
        initialize : function () {
            _.bindAll(this, 'onClickBtnLogin');
        },
        render : function (message) {
            console.log('render login : ' + message);
            var renderedContent = Mustache.to_html(LoginTpl, {message: message});
            this.$el.html(renderedContent);
        },
        events : {
            "click .btn-primary" : "onClickBtnLogin",
        },
        onClickBtnLogin : function (e) {
            e.preventDefault();
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
                error: function (err){ 
                  console.log('error sur POST');
                  that.render('Mauvais mot de passe');
                },
                success: function (dataFromServer) {
                    if (dataFromServer.token) {
                        console.log('update user info model');
                        that.model.set({user: fields[0].value, token: dataFromServer.token});
                    } else {
                        console.log('missing token in server response');
                        that.render('Mauvais mot de passe');
                    }
                }
            });
        }
    });
    return LoginView;
});
