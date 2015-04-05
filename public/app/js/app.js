define('App', [
  'jquery',
  'underscore',
  'backbone',
  'Router'
], function($, _, Backbone, Router) {

  function initialize() {
    var app = new Router();

    Backbone.history.start();
  }

  $.ajaxSetup({
    statusCode: {
        401: function(){
            // Redirect to the login page.
            window.location.replace('/#login');
        },
        403: function() {
            // 403 -- Access denied
            window.location.replace('/#error/denied');
        }
    }
  });

  // TODO: error handling with window.onerror
  // http://www.slideshare.net/nzakas/enterprise-javascript-error-handling-presentation

  return {
    initialize: initialize
  };
});
