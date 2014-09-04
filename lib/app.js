// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var EventSource = require('./eventsource.js');
var ModuleRegistry = require('./moduleregistry.js');

var App = EventSource.extend({
    init: function() {
        this.registry = new ModuleRegistry();

        this.moduleInstances = [];
    },

    registerModule: function(name, moduleClass) {
        this.registry.register(name, moduleClass);
    },

    createModule: function(name, data) {
        var instance = this.registry.create(name, {
            sandbox: {},
            data: data
        });
        this.moduleInstances.push( instance );
        return instance;
    },

    start: function() {

        this.moduleInstances.forEach( function(module) {
            module.start();
        });
    }
});


module.exports = new App();