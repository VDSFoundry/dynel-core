// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var CoreObject = require('./coreobject.js');

module.exports = {

    mixinName: 'EventSource',

    init: function(host) {
        "use strict";

        this.host = host;
        this.eventHandlers = {};
    },

    on: function(eventName, eventHandler, handlerContext) {
        "use strict";

        if (!this.eventHandlers[eventName]) {
            this.eventHandlers[eventName] = [];
        }

        var handlerSet = this.eventHandlers[eventName];
        var exists = false;
        handlerSet.forEach(function (item) {
            if (item.context === handlerContext &&
                item.handler === eventHandler) {

                exists = true;
            }
        }, this);

        if (!exists) {
            handlerSet.push({
                context: handlerContext,
                handler: eventHandler
            });
        }
    },

    removeAllWithContext: function(context) {

        for(var p in this.eventHandlers) {
            if (this.eventHandlers.hasOwnProperty(p)) {

                var handlerSet = this.eventHandlers[p];

                //remove any with context match
                var i = handlerSet.length;
                while (i--) {
                    var handler = handlerSet[i];
                    if (handler.context == context) {
                        handlerSet.splice(i, 1);
                    }
                }
            }
        }
    },

    emit: function(eventName, data) {
        "use strict";

        var handlerSet = this.eventHandlers[eventName];
        if (!handlerSet) {
            return;
        }

        handlerSet.forEach( function(handler) {
            handler.handler.call(handler.context, data);
        });
    }
};

