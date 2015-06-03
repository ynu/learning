'use strict';

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // configurable paths
    grunt.initConfig({

        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        'dist'
                    ]
                }]
            }
        },

        shell: {
            dist: {
                command: 'gitbook build ./Learning ./dist'
            },
        },

        'gh-pages': {
          options: {
            base: 'dist'
          },
          src: ['**']
        }



    });

    grunt.registerTask('deploy', ['clean', 'shell', 'gh-pages']);
    grunt.registerTask('default', ['deploy']);
};
