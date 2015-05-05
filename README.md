**Dynamic Elements - Core**
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

**For Node.js Applications**

To get started, you just need to install the dynel-core package and it's dependencies:

    npm install dynel-core



**For Web Applications**

Dynamic Elements uses the CommonJS module specification, which is not currently supported as-is in browsers. In order to run a Dynamic Elements application in the browser, it needs to be compiled into a browser-friendly JavaScript file (or set of JavaScript files). We will eventually provide pre-compiled versions that can be used for building browser-based JavaScript applications, but for now your code needs to be compiled and packaged with the Dynamic Elements library using browserify, or another similar package.


