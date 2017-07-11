/*!
 * write-json <https://github.com/jonschlinkert/write-json>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var path = require('path');
var isObject = require('isobject');
var writeFile = require('write');

/**
 * Writes a JSON file to disk asynchronously, creating any intermediate
 * directories if they don't already exist.
 *
 * ```js
 * var writeJson = require('write');
 * var value = {foo: 'bar'};
 * writeJson('foo.json', value, function(err) {
 *   if (err) console.log(err);
 * });
 *
 * // pass options to JSON.stringify explicitly
 * writeJson('foo.json', value, null, 2, function(err) {
 *   if (err) console.log(err);
 * });
 *
 * // pass options to JSON.stringify as an object
 * // (since this method returns a promise if no callback is passed,
 * // if you want to pass a replacer function to JSON.stringify, it
 * // must be passed on an options object)
 * writeJson('foo.json', value, {
 *   space: 2,
 *   replacer: function(value) {
 *     // filter out properties
 *     if (typeof value === 'string') {
 *       return undefined;
 *     }
 *     return value;
 *   }
 * }, function(err) {
 *   if (err) console.log(err);
 * });
 * ```
 * @name writeJson
 * @param  {string} `dest` Destination file path
 * @param  {object} `value` Value to stringify.
 * @param  {object} `options` Options to pass to [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
 * @param  {Function} `callback` (optional) If no callback is provided, a promise is returned.
 * @return {undefined}
 * @api public
 */

function writeJson(dest, value, cb) {
  var args = [].slice.call(arguments, 1);
  if (typeof args[args.length - 1] === 'function') {
    cb = args.pop();
  }
  return writeFile(dest, stringify.apply(null, args), cb);
}

/**
 * Writes a JSON file, creating any intermediate directories if they
 * don't already exist, then returns a promise. This is called by the
 * [writeJson](#writeJson) when no callback is passed.
 *
 * ```js
 * var writeJson = require('write');
 * writeJson.promise('foo.txt', 'This is content to write.')
 *   .then(function() {
 *     // do stuff
 *   });
 * ```
 * @name .promise
 * @param  {String} `dest` Destination file path
 * @param  {any} `value` The value to stringify
 * @param  {object} `options` Options to pass to [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
 * @return {Promise}
 * @api public
 */

writeJson.promise = function(dest, value) {
  var args = [].slice.call(arguments, 1);
  return writeFile.promise(dest, stringify.apply(null, args));
};

/**
 * Writes a JSON file synchronously, creating any intermediate
 * directories if they don't already exist.
 *
 * ```js
 * var writeJson = require('write');
 * writeJson.sync('foo.txt', 'This is content to write.');
 * ```
 * @name .sync
 * @param  {String} `dest` Destination file path
 * @param  {any} `value` The value to stringify
 * @param  {object} `options` Options to pass to [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
 * @return {undefined}
 * @api public
 */

writeJson.sync = function(dest, value) {
  var args = [].slice.call(arguments, 1);
  writeFile.sync(dest, stringify.apply(null, args));
};

/**
 * Utility function for stringifying the given value, ensuring that
 * options are correctly passed to `JSON.stringify`.
 *
 * @param {any} `value`
 * @param {Function|Object} `replacer` Function or options object
 * @param {String|Number} `space` The actual value to use for spacing, or the number of spaces to use.
 * @return {String}
 */

function stringify(value, replacer, space) {
  if (isObject(replacer)) {
    var opts = replacer;
    replacer = opts.replacer;
    space = opts.space;
  }
  if (space == null) {
    space = 2;
  }
  return JSON.stringify(value, replacer, space);
}

/**
 * Expose `writeJson`
 */

module.exports = writeJson;
