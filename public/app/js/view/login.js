define('LoginView', [
    'jquery',
    'backbone',
    'mustache',
], function($, Backbone, Mustache) {

    var LoginView = Backbone = Backbone.View.extend({
        el : $("#login_form"),
        initialize : function () {
            this.template = $("#login_form_template").html();
        /*
            var that = this ;
            //on vérifie si pas déjà authentifié
            $.ajax({type:"GET", url:"/alreadyauthenticated",
                error: function (err){ 
                    console.log(err); 
                    that.render("???",{firstName:"John", lastName:"Doe"});
                },
                success: function (dataFromServer) {
                    if ( dataFromServer.firstName) {
                        that.render("Bienvenue",dataFromServer);
                    }
                    else {
                        that.render("???",{firstName:"John", lastName:"Doe"});
                    }
                }
            })
        */
        },
        render : function (message, user) {
            var renderedContent = Mustache.to_html(this.template, {
                message : message,
                firstName : user ? user.firstName : "",
                lastName : user ? user.lastName : ""
            });
            this.$el.html(renderedContent);
        },
        events : {
            "click .btn-primary" : "onClickBtnLogin",
            "click .btn-inverse" : "onClickBtnLogoff"
        },
        onClickBtnLogin : function (domEvent) {
            var fields = $("#blog_login_form :input")
                    , that = this;
            $.ajax({
                type:"POST",
                url:"/authenticate",
                data : { email : fields[0].value, password : fields[1].value } ,
                dataType : "json",
                error: function (err){ console .log(err); },
                success: function (dataFromServer) {
                    if ( dataFromServer .infos) {
                        that.render( dataFromServer .infos);
                    } else {
                        if ( dataFromServer .error) {
                            that.render( dataFromServer .error);
                        } else {
                            that.render("Bienvenue",dataFromServer);
                        }
                    }
                }
            });
        },
        onClickBtnLogoff : function () {
            var that = this ;
            $.ajax({type:"GET", url:"/logoff",
                error: function (err){ console .log(err); },
                success: function (dataFromServer) {
                    console.log(dataFromServer);
                    that.render("???",{firstName:"John", lastName:"Doe"});
                }
            })
        }
    });
    return LoginView;
});
