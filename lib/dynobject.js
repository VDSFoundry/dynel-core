// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var EventSource = require('./eventsource.js');

var DynObject = EventSource.extend({

    set: function(propertyName, propertyValue) {
        "use strict";

        this[propertyName] = propertyValue;

        this.emit('change', {name: propertyName, value: this[propertyName]});
        this.emit('change:' + propertyName, this[propertyName]);
    },

    get: function(propertyName) {
        "use strict";

        return this[propertyName];
    }
});

module.exports = DynObject;
