// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

/*jshint expr: true*/

var chai = require('chai');
var expect = chai.expect;

var Extend = require('../lib/extend.js');

describe('Extend', function()
{    describe('extend properties', function() {

        describe('given a base object extended with a mixin', function() {
            var baseObject;
            var mixin;
            beforeEach(function () {

                baseObject = {
                    BaseValue: 'base',
                    OverriddenFunc: function () {
                        return "base";
                    },
                    CombinedFunc: function () {
                        return "base";
                    }
                };

                mixin = {
                    MixinValue: 'mixin',
                    NewFunc: function () {
                        return "new func";
                    },
                    OverriddenFunc: function () {
                        return "mixin";
                    },
                    CombinedFunc: function () {
                        return this._super() + " mixin";
                    }
                };

                Extend(baseObject, mixin);
            });

            it('base object should have properties from mixin', function () {
                expect(baseObject).to.have.property('MixinValue');
                expect(baseObject.MixinValue).to.equal('mixin');
            });

            it('base object should still have its own properties', function () {
                expect(baseObject).to.have.property('BaseValue');
                expect(baseObject.BaseValue).to.equal('base');
            });

            it('should return "new func" from NewFunc', function () {
                expect(baseObject.NewFunc()).to.equal('new func');
            });

            it('should return "mixin" from OverriddenFunc', function () {
                expect(baseObject.OverriddenFunc()).to.equal('mixin');
            });

            it('should return "base mixin" from CombinedFunc', function () {
                expect(baseObject.CombinedFunc()).to.equal('base mixin');
            });
        });
    });

    describe('given invalid parameters', function() {
        it('Extend should throw an Error if base object is null or undefined', function () {
            expect(Extend.bind(null, {})).to.throw(Error);
            expect(Extend.bind(undefined, {})).to.throw(Error);
        });

        it('should throw Error if mixin is null or undefined', function () {
            expect(Extend.bind({}, null)).to.throw(Error);
            expect(Extend.bind({}, undefined)).to.throw(Error);
        });
    });
});
