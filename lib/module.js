// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.
var CoreObject = require('./coreobject.js');

var Module = CoreObject.extend({
    init: function() {
        this.initialized = false;
    },

    start: function()
    {
        if (this.initialized)
            return;

        this.setup();
        this.initialized = true;
    },

    setup: function() {
        //empty, so no error is thrown when start is called with no derived setup
    },

    stop: function() {
        if (!this.initialized)
            return;

        this.dispose();
        this.initialized = false;
    },

    dispose: function() {
        //empty, so no error is thrown when stop is called with no derived dispose
    }
});

module.exports = Module;
