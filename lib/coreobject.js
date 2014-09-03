// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var extend = require('./extend.js');

//create a constructor that will create an object that will combine a list of mixins
var MakeCtor = function(superClass) {

    var newClass = function(mixins) {

        var self = {};

        //extend the object with all of the mixins
        mixins.forEach( function(mixin) {

            extend(self, mixin);
        });

        return self;
    };

    newClass.mixins = [];
    newClass.static_mixins = [];

    //initialize the constructor with all mixins from the super class
    if (superClass.mixins) {
        superClass.mixins.forEach( function(mixin) {
            newClass.mixins.push(mixin);
        });
    }

    if (superClass.static_mixins) {
        superClass.static_mixins.forEach( function(mixin) {
            newClass.static_mixins.push(mixin);

            extend(newClass, mixin);
        })
    }
    newClass.SuperClass = superClass;

    return newClass;
};


var CoreObject = {

    extend: function(mixin_in, mixin_static) {

        var newClass = MakeCtor(this);

        if (mixin_in) {
            newClass.mixins.push(mixin_in);
        }

        if (mixin_static) {
            extend(newClass, mixin_static);
        }

        var realClass = function(mixin) {

            var obj;

            var mixins = newClass.mixins.slice(0);
            obj = new newClass(mixins);

            if (obj.init) {
                obj.init(mixin);
            }
            return obj;
        };

        extend(realClass, newClass);

        realClass.extend = this.extend;

        return realClass;
    }
};

module.exports = CoreObject;
