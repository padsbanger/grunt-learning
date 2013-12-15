module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      build: {
        src: 'js/src/*.js',
        dest: 'js/build/app.min.js'
      }
    },
    concat: {
        dist: {
          src: 'js/src/*.js',
          dest: 'js/build/app.min.js'
        }
    },
    less: {
      development: {
        options: {
          compress: true,
          paths: ["less/modules/"]
        },
        files: {
          "css/style.css": "less/*.less"
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/src/*.js', 'less/*.less', 'index.html', 'less/modules/*.less' ],
        tasks: ['concat', 'uglify', 'less'],
        options: {
            spawn: false,
            livereload: true,
        },
      }
    }
});

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('js', ['concat', 'uglify']);

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

};