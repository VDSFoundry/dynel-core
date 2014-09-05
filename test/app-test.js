// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

/*jshint expr: true*/

var expect = require('chai').expect;
var sinon = require('sinon');

var App = require('../lib/app.js');
var Module = require('../lib/module.js');

/*
App represents an application.

Users can call App.registerModule to register a module by name and class
Users can call App.createModule to instantiate a module by name

When the app is started, it goes through it's list of instantiated modules and starts them

When the host application is ready to execute the application, App.start will be called.

When a module is instantiated, App creates a sandbox object that it passes to the constructor along with any user data provided

Sandbox will isolate the App object itself from being modified by any modules by encapsulating access to the underlying App object
 */


describe('App', function() {

    describe('when a module is instantiated', function() {

        var ModuleClass;
        var createdModule;
        beforeEach(function() {
            ModuleClass = function(options) {

                this.options = options;
                this.start = sinon.spy();
                this.stop = sinon.spy();
            };

            App.registerModule('Module', ModuleClass);
            createdModule = App.createModule('Module', 'data');
        });

        it('should return a module instance', function() {
            expect(createdModule).to.not.be.undefined;
        });

        describe('and start is called', function() {

            beforeEach(function() {
                App.start();
            });

            it('should call start on the module', function() {

                expect(createdModule.start.callCount).to.be.equal(1);
            });

            it ('should pass sandbox to the start method', function() {
                expect(createdModule.options).to.have.property('sandbox');
            });

            it ('should pass user data to the start method', function() {
                expect(createdModule.options).to.have.property('data');
                expect(createdModule.options.data).to.be.equal('data');
            });
        });
    });
});

