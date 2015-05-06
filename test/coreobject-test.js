// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

/*jshint expr: true*/

var chai = require('chai');
var expect = chai.expect;
var CoreObject = require('../lib/coreobject.js');
var sinon = require('sinon');

/*
describe('CoreObject', function() {

    describe('extend', function() {

        describe('with derived object', function() {
            var DerivedClass;
            var derivedObject;

            beforeEach( function() {
                DerivedClass = CoreObject.extend({
                    ExtendedValue: 'extended',
                    ExtendedFunc: function() {
                        return "extended";
                    }
                });
                derivedObject = new DerivedClass();
            });

            it ('should have ExtendedValue', function() {
                expect(derivedObject).to.have.property('ExtendedValue');
                expect(derivedObject.ExtendedValue).to.equal('extended');
            });
            it ('should return "extended" from ExtendedFunc', function() {
                expect(derivedObject.ExtendedFunc()).to.equal('extended');
            });

            describe('with further derived object', function() {

                var SecondDerivedClass;
                var secondDerivedObject;

                beforeEach( function() {
                    SecondDerivedClass = DerivedClass.extend({
                        SecondExtendedValue: 'second extended',
                        ExtendedFunc: function() {
                            return this._super() + ' second';
                        }
                    });

                    secondDerivedObject = new SecondDerivedClass();
                });

                it('should have ExtendedValue and SecondExtendedValue', function () {

                    expect(secondDerivedObject).to.have.property('ExtendedValue');
                    expect(secondDerivedObject.ExtendedValue).to.equal('extended');

                    expect(secondDerivedObject).to.have.property('SecondExtendedValue');
                    expect(secondDerivedObject.SecondExtendedValue).to.equal('second extended');
                });


                it('should return "extended second" from ExtendedFunc by calling _super', function () {
                    expect(secondDerivedObject.ExtendedFunc()).to.equal('extended second');
                });
            });
        });
    });

    describe('init', function() {
        describe('with derived object', function() {
            var DerivedClass;
            var derivedObject;
            var initProxy;

            beforeEach( function() {
                initProxy = sinon.spy();

                DerivedClass = CoreObject.extend({
                    ExtendedValue: 'extended',
                    ExtendedFunc: function() {
                        return "extended";
                    },
                    init: function(data){
                        initProxy(data);
                    }
                });
                derivedObject = new DerivedClass('ctor value');
            });

            it ('should call init after object is constructed', function() {

                expect(initProxy.callCount).to.equal(1);
            });

            it ('should pass constructor arguments to init', function() {
                expect(initProxy.calledWith('ctor value')).to.be.true;
            });
        });
    });
});
*/
