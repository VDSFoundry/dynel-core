// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

/*jshint expr: true*/

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var Module = require('../lib/module.js');

describe('Module', function() {

    var moduleInstance;
    var setupProxy;
    var disposeProxy;

    beforeEach(function() {
        setupProxy = sinon.spy();
        disposeProxy = sinon.spy();

        var ModuleClass = Module.extend({
            setup: setupProxy,
            dispose: disposeProxy
        });

        moduleInstance = new ModuleClass();
    });

    describe('when start is called', function() {

        beforeEach(function() {
            moduleInstance.start('data');
        });

        it('should call setup', function() {
            expect(setupProxy.callCount).to.equal(1);
        });

        it ('should pass config data to setup method', function() {
            expect(setupProxy.calledWith('data')).to.be.true;
        });


        describe('when stop is called', function() {
            it('should call dispose', function() {
                moduleInstance.stop();
                expect(disposeProxy.callCount).to.equal(1);
            });
        });
        describe('when stop is called twice', function() {
            it('should call dispose once', function() {
                moduleInstance.stop();
                moduleInstance.stop();
                expect(disposeProxy.callCount).to.equal(1);
            });
        });
    });

    describe('when start is called twice', function() {
        it('it should call setup once', function() {
            moduleInstance.start();
            moduleInstance.start();
            expect(setupProxy.callCount).to.equal(1);
        });
    });




});
