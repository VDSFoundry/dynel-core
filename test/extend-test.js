// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is released under an MIT license. See LICENSE file in the project root for complete license information.

//var assert = require('assert');
//var chai = require('chai');
//var assert = chai.assert;
var chai = require('chai');

chai.should();


var extend = require('../lib/extend.js');


describe('Extend', function()
{
    var baseObject;

    beforeEach(function() {

        baseOject = {
            Value1: 'value1'
        }
    });

    it('derived object should have Value1 field from base object', function()
    {
        var derivedObject = {};

        extend(derivedObject, baseOject);

        derivedObject.should.have.property('Value1');
    });


})