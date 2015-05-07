/**
 * Created by geraldf on 5/6/2015.
 */

var GetSet = {

    className: 'GetSet',

    set: function(propertyName, propertyValue) {
        "use strict";

        this[propertyName] = propertyValue;
    },

    get: function(propertyName) {
        "use strict";

        return this[propertyName];
    }
};

module.exports = GetSet;
