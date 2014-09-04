// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var extend = require('./extend.js');

//create a constructor that will create an object that will combine a list of mixins
var makeCtor = function(superClass) {
    "use strict";

    var NewClass = function(mixins) {

        var self = {};

        //extend the object with all of the mixins
        mixins.forEach( function(mixin) {

            extend(self, mixin);
        });

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
            NewClass.mixins.push(mixin_in);
        }

        if (mixin_static) {
            extend(NewClass, mixin_static);
        }

        var realClass = function(mixin) {

            var obj;

            var mixins = NewClass.mixins.slice(0);
            obj = new NewClass(mixins);

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
