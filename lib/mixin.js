var extend = require('./extend.js');

var Mixin = {
    extend: function(ext) {
        "use strict";

        return function() {
            var self = {};
            extend(self, ext);
            return self;
        };
    }
};

module.exports = Mixin;
