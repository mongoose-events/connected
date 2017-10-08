/* eslint consistent-this: off */
/* eslint no-invalid-this: off */
/* eslint no-param-reassign: off */

'use strict'

/**
 * @type {Object}
 */
var Logger = console;

/**
 * @param {Object|undefined} CustomLogger
 *
 * @returns {undefined}
 */
function connectedEvent( CustomLogger ) {
  var db = this

  if ( CustomLogger ) {
    Logger = CustomLogger;
  }

  if ( db.base.options.debug ) {
    Logger.log( '[debug]', new Date(), 'connected to mongodb://%host:%port/%database'
      .replace( '%host', db.host )
      .replace( '%port', db.port )
      .replace( '%database', db.name )
    )
  }
}

module.exports = connectedEvent
