# mongoose-events-connected
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![NSP Status][nsp-image]][nsp-url]

a mongoose event handler that handles the connected event

## table of contents
* [installation](#installation)
* [usage](#usage)
    * [basic](#basic)
    * [with a logging service](#with-a-logging-service)
* [license](#license)

## installation
```javascript
npm install mongoose-events-connected
```

## usage
### basic
```javascript
var connectedEvent = require( 'mongoose-events-connected' )
var db

db = mongoose.connection
db.on( 'connected', connectedEvent.bind( db ) )
```

### with a logging service
```javascript
var connectedEvent = require( 'mongoose-events-connected' )
var db

// logging service needs to have a .log( arg1[, arg2[, ...] ] ) method
var logger = require( 'your-logger' )

db = mongoose.connection
db.on( 'connected', connectedEvent.bind( db, logger ) )
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/mongoose-events/connected/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/mongoose-events/connected?branch=master
[mit-license]: https://raw.githubusercontent.com/mongoose-events/connected/master/license.txt
[npm-image]: https://img.shields.io/npm/v/mongoose-events-connected.svg
[npm-url]: https://www.npmjs.com/package/mongoose-events-connected
[nsp-image]: https://nodesecurity.io/orgs/mongoose-events/projects/6091d0f1-9b8e-44c4-af64-a14cecd02a21/badge
[nsp-url]: https://nodesecurity.io/orgs/mongoose-events/projects/6091d0f1-9b8e-44c4-af64-a14cecd02a21
[travis-image]: https://travis-ci.org/mongoose-events/connected.svg?branch=master
[travis-url]: https://travis-ci.org/mongoose-events/connected
