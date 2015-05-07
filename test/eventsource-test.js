// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

/*jshint expr: true*/

var chai = require('chai');
var expect = chai.expect;
var EventSource = require('../lib/eventsource.js');

/*
describe('EventSource', function() {
    this.timeout(500);

    var source;
    beforeEach(function() {
        source = new EventSource();
        source.init();
    });

    it('should fire the event callback when emit is called', function(done) {
        source.on('event', function() {
            done();
        });
        source.emit('event');
    });

    it ('should forward the data passed to emit to the event callback', function(done) {
        source.on('event', function(data) {
            if (data === 'data') {
                done();
            }
        });
        source.emit('event', 'data');
    });

});
*/
