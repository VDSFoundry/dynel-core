// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var CoreObject = require('./coreobject.js');
var Compose = require('./composeclass.js');

var DynObject = Compose(
    'DynObject',
    require('./changeemitter.js')
);

module.exports = DynObject;
