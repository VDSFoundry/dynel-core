// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is released under an MIT license. See LICENSE file in the project root for complete license information.

var chai = require('chai');
var expect = chai.expect;

var Extend = require('../lib/extend.js');

describe('Extend', function()
{
    var baseObject;
    var derivedObject;

    beforeEach(function() {

        baseObject = {
            Value1: 'value1'
        };

        derivedObject = {
            Value2: 'value2'
        };
    });

    it('should have property Value1 from base object', function()
    {
        Extend(derivedObject, baseObject);

        expect(derivedObject).to.have.property('Value1');
        expect(derivedObject.Value1).to.equal('value1');
    });

    it('should still have Value2 property', function()
    {
        Extend(derivedObject, baseObject);

        expect(derivedObject).to.have.property('Value2');
        expect(derivedObject.Value2).to.equal('value2');
    });


    it ('should throw Error if base object is null or undefined', function()
    {
        expect(Extend.bind(null, baseObject)).to.throw(Error);
        expect(Extend.bind(undefined, baseObject)).to.throw(Error);
    });

    it ('should throw Error if derived object is null or undefined', function()
    {
        expect(Extend.bind(derivedObject, null)).to.throw(Error);
        expect(Extend.bind(derivedObject, undefined)).to.throw(Error);
    });
})