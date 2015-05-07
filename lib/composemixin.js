/**
 * Created by geraldf on 5/6/2015.
 */

var CoreObject = require('./coreobject.js');


module.exports = function() {

    var name = arguments[0];

    var mixins = [];

    for( var i = 1; i < arguments.length; i++) {
        mixins.push(arguments[i]);
    }

    return {
        mixinName: name,
        mixins: mixins
    };
};

