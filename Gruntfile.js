module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
    ignore_warning: {
        options: {
          '-W015': true,
        },
        src: ['src/*.js'],
      },
    },
    uglify: {
      build: {
        src: 'src/scrollnfix.js',
        dest: 'build/scrollnfix.min.js'
      }
    },
    prettify: {
      options: {
      },
      all: {
        expand: true,
        cwd: 'example/',
        ext: '.html',
        src: ['*.html'],
        dest: 'examplepretty/'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // Load the plugin that provides the jshint task
  grunt.loadNpmTasks('grunt-contrib-jshint');
  // Load the plugin that prettifies HTML file
  grunt.loadNpmTasks('grunt-prettify');
  
  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};
