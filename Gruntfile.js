module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bower: {
      install: {
        options: {
          targetDir: 'public/lib',
          layout: 'byType',
          install: true,
          verbose: true,
        }  
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-bower-task');

  // Default task(s).
  grunt.registerTask('default', ['bower']);

};
