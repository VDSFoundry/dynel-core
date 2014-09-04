// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var CoreObject = require('./coreobject.js');

var ModuleRegistry = CoreObject.extend({

    init: function() {
        "use strict";

        this.registeredModuleClasses = {};
    },

    register: function(name,ModuleClass) {
        "use strict";

        this.registeredModuleClasses[name] = ModuleClass;
    },

    get: function(name) {
        "use strict";

        return this.registeredModuleClasses[name];
    },

    create: function(name,data) {
        "use strict";

        var ModuleClass = this.get(name);
        if (ModuleClass)
        {
            return new ModuleClass(data);
        }
    }
});


module.exports = ModuleRegistry;
