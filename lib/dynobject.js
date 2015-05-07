// Copyright (c) Visual Data Solutions, Inc. All rights reserved. This source code is distributed under the terms of the MIT license. See LICENSE file in the project root for complete license information.

var CoreObject = require('./coreobject.js');

var DynObject = CoreObject.extend({
    className: 'DynObject',
    mixins: [
        require('./changeemitter.js')
    ]
});

module.exports = DynObject;
