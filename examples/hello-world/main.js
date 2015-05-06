var DynObject = require('dynel-core').DynObject;

var HelloWorld = DynObject.extend({
    run: function() {
        process.stdout.write('Hello World!');
    }
});

var hello = new HelloWorld();
hello.run();
