// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.
var CoreObject = require('./coreobject.js');

var Module = CoreObject.extend({
    init: function(data) {
        "use strict";

        this.initialized = false;

        if (data) {
            this.sandbox = data.sandbox;
            this.data = data.data;
        }
    },

    start: function() {
        "use strict";

        if (this.initialized)
            return;

        this.setup.apply(this, arguments);
        this.initialized = true;
    },

    setup: function() {
        //empty, so no error is thrown when start is called with no derived setup
    },

    stop: function() {
        "use strict";

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
