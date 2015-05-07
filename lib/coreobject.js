// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var extend = require('./extend.js');


var extendProperty = function(base, mixin, p) {
    "use strict";

    if (typeof mixin[p] === 'function') {
        base[p] = function() {
            return mixin[p].apply(this, arguments);
        }
    }
    else if (p != 'mixinName' && p != 'mixins') {
        base[p] = mixin[p];
    }
};

var extendOverrides = function(obj, overrides) {

    for(var p in overrides) {
        var func = overrides[p];
        var _super = obj[p];

        obj[p] = function() {

            [].unshift.call(arguments, _super.bind(this));
            return func.apply(this, arguments);
        }
    }
};

var extendProperties = function(base, mixin) {
    "use strict";

    for(var p in mixin) {
        if (mixin.hasOwnProperty(p)) {

            if (p === 'override') {
                extendOverrides(base, mixin[p]);
            }
            else {
                var prop = mixin[p];
                extendProperty(base, mixin, p);
            }
        }
    }
};


var extendMixin = function(base, mixin) {
    "use strict";

    if (!base)
        throw new Error('base object must be supplied.');

    if (!mixin)
        throw new Error('mixin object must be supplied.');

    extendProperties(base, mixin);
};




//create a constructor that will create an object that will combine a list of mixins
var makeCtor = function(superClass) {
    "use strict";

    var addMixins = function(obj, mixins) {

        mixins.forEach( function(mixin) {
            if (mixin.mixinName) {
                obj.mixins[mixin.mixinName] = mixin;
            }
            else if (mixin.className) {
                obj.mixins[mixin.className] = mixin;
            }
            if (mixin.mixins) {
                addMixins(obj, mixin.mixins);
            }
            extendMixin(obj, mixin);
        });
    };

    var NewClass = function(mixins) {

        var self = {};

        self.mixins = {};

        addMixins(self, mixins);

        return self;
    };

    NewClass.mixins = [];
    NewClass.static_mixins = [];

    //initialize the constructor with all mixins from the super class
    if (superClass.mixins) {
        superClass.mixins.forEach( function(mixin) {
            NewClass.mixins.push(mixin);
        });
    }

    if (superClass.static_mixins) {
        superClass.static_mixins.forEach( function(mixin) {
            NewClass.static_mixins.push(mixin);

            extend(newClass, mixin);
        });
    }
    NewClass.SuperClass = superClass;

    return NewClass;
};


var CoreObject = {

    extend: function(mixin_in, mixin_static) {
        "use strict";

        var NewClass = makeCtor(this);

        if (mixin_in) {
            if (mixin_in.mixins) {
                mixin_in.mixins.forEach( function(m) {
                    NewClass.mixins.push(m);
                }, this);
                delete mixin_in.mixins;
            }
            NewClass.mixins.push(mixin_in);
        }

        if (mixin_static) {
            extend(NewClass, mixin_static);
        }

        var realClass = function(mixin) {

            var obj;

            var mixins = NewClass.mixins.slice(0);
            obj = new NewClass(mixins);

            if (obj.mixins) {
                for( var p in obj.mixins) {
                    if (obj.mixins.hasOwnProperty(p)) {
                        var m = obj.mixins[p];
                        if (m.init)
                        {
                            m.init.apply(obj);
                        }
                    }
                }
            }
            if (obj.init) {
                obj.init(mixin);
            }
            return obj;
        };

        extend(realClass, NewClass);

        realClass.extend = this.extend;

        return realClass;
    }
};

module.exports = CoreObject;
