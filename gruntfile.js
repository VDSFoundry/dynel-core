// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

module.exports = function(grunt) {

    grunt.initConfig({

        jshint: {
            all: ['lib/*.js', 'test/*.js'],
            options: { multistr: true }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['jshint']);
};
