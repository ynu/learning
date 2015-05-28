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
                command: 'gitbook build ./Learning --output=./dist'
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
};
