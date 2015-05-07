var ComposeMixin = require('./composemixin.js');

module.exports = ComposeMixin(
    'ChangeEmitter',
    require('./getset.js'),
    require('./eventsource.js'),
    {
        set: function(propertyName, propertyValue) {
            "use strict";

            this.mixins.GetSet.set.apply(this, arguments);

            this.emit('change', {name: propertyName, value: this[propertyName]});
            this.emit('change:' + propertyName, this[propertyName]);
        }
    }
);

/*
module.exports = {

    mixinName: 'ChangeEmitter',

    mixins: [
        require('./getset.js'),
        require('./eventsource.js')
    ],

    set: function(propertyName, propertyValue) {
        "use strict";

        this.mixins.GetSet.set.apply(this, arguments);

        this.emit('change', {name: propertyName, value: this[propertyName]});
        this.emit('change:' + propertyName, this[propertyName]);
    }
};
*/
