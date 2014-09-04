// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var CoreObject = require('./coreobject.js');

var ModuleRegistry = CoreObject.extend({

    init: function() {
        this.registeredModuleClasses = {};
    },

    register: function(name,moduleClass) {
        this.registeredModuleClasses[name] = moduleClass;
    },

    get: function(name) {
        return this.registeredModuleClasses[name];
    },

    create: function(name,data) {
        var moduleClass = this.get(name);
        if (moduleClass)
        {
            return new moduleClass(data);
        }
    }
});


module.exports = ModuleRegistry;
