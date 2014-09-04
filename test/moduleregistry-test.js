// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

/*jshint expr: true*/

/*
Module registry
---------------

Users can register module classes by name

Users can instantiate modules by name, passing in optional data to the constructos
*/

var expect = require('chai').expect;
var sinon = require('sinon');

var ModuleRegistry = require('../lib/moduleregistry.js');
var Module = require('../lib/module.js');


describe('ModuleRegistry', function() {

    var registry = new ModuleRegistry();

    describe('when FirstModuleClass is registered as FirstModule', function() {

        var FirstModuleClass;
        beforeEach(function () {
            FirstModuleClass = function(data) {
                this.ModuleName = 'FirstModule';
                this.ConstructorData = data;
            };
            registry.register('FirstModule', FirstModuleClass);
        });

        describe('then calling get with name of module', function () {

            var queriedModuleClass;
            beforeEach(function () {
                queriedModuleClass = registry.get('FirstModule');
            });

            it('should return the module class', function () {
                expect(queriedModuleClass).to.equal(FirstModuleClass);
            });
        });

        describe('then calling create with the name of a module class', function () {
            var createdModule;
            beforeEach(function() {
                createdModule = registry.create('FirstModule', 'data');
            });

            it('should return an instance of the module class', function () {
                expect(createdModule).to.have.property('ModuleName');
                expect(createdModule.ModuleName).to.equal('FirstModule');
            });

            it ('should pass a supplied argument to the module constructor', function() {
                expect(createdModule.ConstructorData).to.equal('data');
            });
        });
    });
});
