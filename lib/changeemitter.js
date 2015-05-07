
module.exports = {

    mixinName: 'ChangeEmitter',

    mixins: [
        require('./getset.js'),
        require('./eventsource.js')
    ],

    override: {
        set: function(_super, propertyName, propertyValue)
        {
            "use strict";

            _super(propertyName, propertyValue);

            this.emit('change', {name: propertyName, value: this[propertyName]});
            this.emit('change:' + propertyName, this[propertyName]);
        }
    }
};
