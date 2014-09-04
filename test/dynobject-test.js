// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

/*jshint expr: true*/

var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');

var DynObject = require('../lib/dynobject.js');

describe('DynObject', function() {

    var dynObject;
    beforeEach(function() {
        dynObject = new DynObject();
    });

    describe('getters and setters', function() {

        it('should set a property value when set is called', function() {
            dynObject.set('property', 'propertyValue');
            expect(dynObject.property).to.equal('propertyValue');
        });

        it ('should return a property value when get is called', function() {
            dynObject.property = 'propertyValue';
            expect(dynObject.get('property')).to.equal('propertyValue');
        });
    });

    describe('change events', function() {
        describe('with general change handler', function() {
            var changeHandler;
            beforeEach(function () {
                changeHandler = sinon.spy();
                dynObject.on('change', changeHandler);
            });
            describe('and property is set', function() {
                beforeEach(function() {
                   dynObject.set('property', 'propertyValue');
                });
                it('should emit change event', function () {
                    expect(changeHandler.callCount).to.equal(1);
                });

                it('should provide name and value of property', function () {
                    expect(changeHandler.calledWith({name: 'property', value: 'propertyValue'})).to.be.true;
                });
            });
        });

        describe('with specific change handler', function() {
            var specificChangeHandler;
            beforeEach(function () {
                specificChangeHandler = sinon.spy();
                dynObject.on('change:property', specificChangeHandler);
            });
            describe('and property is set', function() {
                beforeEach(function() {
                    dynObject.set('property', 'propertyValue');
                });
                it('should emit change event', function () {
                    expect(specificChangeHandler.callCount).to.equal(1);
                });

                it('should provide value of property', function () {
                    expect(specificChangeHandler.calledWith('propertyValue')).to.be.true;
                });
            });
        });
    });
});
