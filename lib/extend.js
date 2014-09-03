// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is released under an MIT license. See LICENSE file in the project root for complete license information.

// extend the base object by adding properties from source
var Extend = function(base, mixin) {

    if (!base)
        throw new Error('base object must be supplied.');

    if (!mixin)
        throw new Error('mixin object must be supplied.');

    for(var p in mixin) {
        if (mixin.hasOwnProperty(p)) {

            var prop = mixin[p];

            //if it's a function, and the target object has the same function
            //then let's create a proxy that will setup a _super method
            //that can be used in the derived object to call the base object's function
            if (typeof prop === 'function' && typeof base[p] === 'function') {
                var sup = base[p];
                (function (_super, _thisFunc) {
                    base[p] = function () {
                        var result;
                        var oldSuper = base._super;

                        base._super = _super;

                        result = _thisFunc.apply(this, arguments);

                        base._super = oldSuper;
                        return result;
                    }
                })(sup, prop);
            }
            else {
                base[p] = prop;
            }
        }
    }
};

module.exports = Extend;
