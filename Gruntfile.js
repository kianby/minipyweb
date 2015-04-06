module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        bowercopy: {
            options: {
                clean: false
            },
            libs: {
                options: {
                    destPrefix: 'public/app/lib'
                },
                files: {
                    'jquery/jquery.js': 'jquery/dist/jquery.js',
                    'jquery/jquery.min.js': 'jquery/dist/jquery.min.js',
                    'jquery/jquery.min.map': 'jquery/dist/jquery.min.map',
                    'jquery/jquery.storageapi.js': 'jQuery-Storage-API/jquery.storageapi.js',
                    'jquery/jquery.storageapi.min.js': 'jQuery-Storage-API/jquery.storageapi.min.js',
                    'requirejs/require.js': 'requirejs/require.js',
                    'requirejs/text.js': 'requirejs-text/text.js',
                    'mustache/mustache.js': 'mustache/mustache.js',
                    'mustache/mustache.min.js': 'mustache/mustache.min.js',
                    'underscore/underscore.js': 'underscore/underscore.js',
                    'underscore/underscore.min.js': 'underscore/underscore-min.js',
                    'underscore/underscore.min.map': 'underscore/underscore-min.map',
                    'backbone/backbone.js': 'backbone/backbone.js',
                    'bootstrap/bootstrap.js': 'bootstrap/dist/js/bootstrap.js',
                    'bootstrap/bootstrap.css': 'bootstrap/dist/css/bootstrap.css',
                    'bootstrap': 'bootstrap/dist/fonts/*',
                },
            },
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-bowercopy');

    // Default task(s).
    grunt.registerTask('default', ['bowercopy']);

};
