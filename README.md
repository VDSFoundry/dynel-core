**Dynamic Elements - Core Framework**
===


[![Build Status](https://travis-ci.org/VDSFoundry/dynel-core.svg?branch=master)](https://travis-ci.org/VDSFoundry/dynel-core) [![Code Climate](https://codeclimate.com/github/VDSFoundry/dynel-core/badges/gpa.svg)](https://codeclimate.com/github/VDSFoundry/dynel-core)


Dynamic Elements is a JavaScript framework for building modular component-based applications. It can be used for building both web applications or Node.js applications. 

 - [The Core Framework](https://github.com/VDSFoundry/dynel-core) provides the basic building blocks of a Dynamic
   Elements application.
 - [The Data Framework](https://github.com/VDSFoundry/dynel-data) builds on the Core Framework for classes to work
   with business data, including model objects with well-defined data
   types, and collections.
 - [The UI Framework](https://github.com/VDSFoundry/dynel-ui) provides support for building UI elements for your
   web applications that can be tied to your business data.


**Getting Started**
---

To get started using Core Framework in a Node.js application, you just need to install the dynel-core package and it's dependencies:

    npm install dynel-core

Core Framework provides the building blocks for building functional components, using a combination of classical inheritance and composition using mixins.

---
**CoreObject and Classical Inheritance**

Dynamic Elements classes are derived from CoreObject. The following example demonstrates how to create a derived class from CoreObject:

var CoreObject = require('dynel-core').CoreObject;

    var HelloWorld = CoreObject.extend({
        className: 'HelloWorld',

	run: function() {
		console.log('Hello World!');
	}
    });
    
    var hello = new HelloWorld();
    hello.run();


**Mixins and Composition**

Dynamic Elements classes support components called mixins, which add state and/or functionality to an object. Mixins are plain old JavaScript objects.

The following example demonstrates how to create a class that is composed of multiple mixins:
 
    var Hello = {
		hello: function() {
			console.log('Hello ');
		}
    };
    var World = {
	    world: function() {
			console.log('World!');
		}
	};
	
 
	 var HelloWorld = CoreObject.extend({
		className: 'HelloWorld',
		
		mixins: [
			Hello,
			World
		],
		
		run: function() {
			this.hello();
			this.world();
		}
	});

	var hello = new HelloWorld();
	hello.run();
	

Mixins can also be composed of other mixins:

    var Hello = {
		hello: function() {
			console.log('Hello ');
		}
    };
    var World = {
	    mixins: [ 
		Hello
	    ],
	    world: function() {
			console.log('World!');
		}
	};
 
	 var HelloWorld = CoreObject.extend({
		className: 'HelloWorld',
		
		mixins: [
			World
		],
		
		run: function() {
			this.hello();
			this.world();
		}
	});

	var hello = new HelloWorld();
	hello.run();

---
**Event Sources**

The Core Framework includes a mixin for listening for and emitting events. It is similar to the Node.js EventEmitter, but is designed as a simple mixin that can be added to Dynamic Elements objects.

    var EventSource = require('dynel-core').EventSource;
    
    var HelloWorld = CoreObject.extend({
	className: 'HelloWorld',
   
        mixins: [
	  EventSource 
	],

	run: function() {
		this.emit('HelloWorld', 'Hello World!');
	}
    });

    var hello = new HelloWorld();
    hello.on('HelloWorld', function(data) {
       console.log(data);
    });
    hello.run();
    
