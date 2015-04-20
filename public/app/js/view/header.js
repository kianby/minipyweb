define('HeaderView', [
    'jquery',
    'backbone',
    'handlebars',
    'text!template/navbar.html'
], function($, Backbone, Handlebars, navbarTpl) {

    var HeaderView = Backbone.View.extend({
        el : $('#header'),
        initialize : function () {
            this.template = Handlebars.compile(navbarTpl);
            _.bindAll(this, 'render');
            this.model.on('change', this.render);
            // always visible
            this.render();
        },
        events: {
          'click a[role=nav]': 'navigateTo'
        },
        // use events to render when necessary
        render : function () {
            console.log('User model = ' + this.model.toJSON());
            var content = this.template(this.model.toJSON());
            this.$el.html(content);
        },
    });
    return HeaderView;
});
