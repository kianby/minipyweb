define('HeaderView', [
    'jquery',
    'backbone',
    'mustache',
    'text!template/navbar.html'
], function($, Backbone, Mustache, navbarTpl) {

    var HeaderView = Backbone.View.extend({
        el : $('#header'),
        initialize : function () {
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
            var content = Mustache.to_html(navbarTpl, this.model.attributes);
            this.$el.html(content);
        },
    });
    return HeaderView;
});
