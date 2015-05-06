var Module = require('dynel-core').Module;
var App = require('dynel-core').App;

var PrintModule = Module.extend({
    start: function()
    {
        console.log(this.data.value);
    }
});

App.registerModule('PrintModule', PrintModule);

App.createModule('PrintModule', { value: 'Hello ' });
App.createModule('PrintModule', { value: 'World!' });

App.start();

