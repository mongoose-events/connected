/* eslint prefer-rest-params: off */

'use strict';

var connected = require( '../src/index' )
var db = require( './fixture/db' )
var sinon = require( 'sinon' )
var spy = sinon.spy( console, 'log' )
var tap = require( 'tap' )

tap.test( 'connectedEvent without debug output',
  function ( t ) {
    var connectedEvent

    db.base.options.debug = false
    connectedEvent = connected.bind( db )
    connectedEvent()

    t.same( spy.notCalled, true, 'should not output a console.log message' )
    t.end()
  }
)

tap.test( 'connectedEvent with debug output',
  function ( t ) {
    var connectedEvent

    db.base.options.debug = true
    connectedEvent = connected.bind( db )
    connectedEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'connected to mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message'
    )

    t.end()
  }
)

tap.test( 'connectedEvent with custom logger',
  function ( t ) {
    var connectedEvent

    var logger = {
      log: function () {
        var args = Array.from( arguments );

        console.log( args.join( ' ' ) )
      }
    }

    db.base.options.debug = true
    connectedEvent = connected.bind( db, logger )
    connectedEvent()

    t.same(
      spy.calledWith(
        '[debug]',
        spy.getCall( 0 ).args[ 1 ],
        'connected to mongodb://localhost:27017/mydb'
      ),
      true,
      'should output a console.log message using a custom logger'
    )

    t.end()
  }
)
