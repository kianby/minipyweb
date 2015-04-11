define('App', [
  'jquery',
  'underscore',
  'backbone',
  'Router'
], function($, _, Backbone, Router) {

  function initialize() {

    // add navigateTo method to Backbone views
    Backbone.View.prototype.navigateTo = function(e) {
        console.log('catch click ' + $(e.target).attr('href'));
        Backbone.trigger('nav:route', $(e.target).attr('href'));
        e.preventDefault();
    };

    var router = new Router();

    Backbone.history.start();
  }

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});
