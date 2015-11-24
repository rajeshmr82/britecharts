module.exports = function(grunt) {
    'use strict';

    // Project configuration.
    grunt.config.set('jsdoc', {
        dist : {
            src: ['./src/charts/*.js'],
            jsdoc: './node_modules/.bin/jsdoc',
            options: {
                destination: 'docs',
                configure: './src/jsdoc.conf.json',
                template: './node_modules/ink-docstrap/template',
                tutorials: './demos'
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.registerTask('docs', [
        'jsdoc:dist',
        'connect:docs'
    ]);
};