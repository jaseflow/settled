
module.exports = function(grunt) {
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        autoprefixer: {
            options: {},
            no_dest: {
                src: 'public/stylesheets/style.css'
            }
        },

        watch: {
            autoprefixer: {
                files: ['public/stylesheets/style.css'],
                tasks: ['autoprefixer']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'public/stylesheets/style.css',
                    'views/admin.jade'
                ]
            }
        }

    });

    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['autoprefixer']);
}
