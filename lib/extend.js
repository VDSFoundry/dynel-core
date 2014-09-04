// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

// extend the base object by adding properties from mixin

var extendProperty = function(base, mixin, p) {
    "use strict";

    base[p] = mixin[p];
};

var extendMethod = function(base, mixin, methodName) {
    "use strict";

    (function(oldMethod, newMethod) {
        base[methodName] = function () {
            var result;
            var oldSuper = base._super;

            base._super = oldMethod;

            result = newMethod.apply(this, arguments);

            base._super = oldSuper;
            return result;
        };
    })(base[methodName], mixin[methodName]);
};


var extendProperties = function(base, mixin) {
    "use strict";

    for(var p in mixin) {
        if (mixin.hasOwnProperty(p)) {

            var prop = mixin[p];

            if (typeof prop === 'function' && typeof base[p] === 'function') {
                extendMethod(base, mixin, p);
            }
            else {
                extendProperty(base, mixin, p);
            }
        }
    }
};


var extend = function(base, mixin) {
    "use strict";

    if (!base)
        throw new Error('base object must be supplied.');

    if (!mixin)
        throw new Error('mixin object must be supplied.');

    extendProperties(base, mixin);
};

module.exports = extend;
