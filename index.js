/*!
 * write-json <https://github.com/jonschlinkert/write-json>
 *
 * Copyright (c) 2014-2015, 2017, Jon Schlinkert.
 * Released under the MIT License.
 */

'use strict';

var writeFile = require('write');

/**
 * Expose `writeJson`
 */

module.exports = function writeJson(dest, data, cb) {
  var args = [].slice.call(arguments, 1);
  cb = args.pop();
  if (args.length === 1) args.push(null, 2);
  writeFile(dest, JSON.stringify.apply(JSON, args), cb);
};

/**
 * Expose `writeJson.sync`
 */

module.exports.sync = function writeJsonSync(dest, data) {
  try {
    var args = [].slice.call(arguments, 1);
    if (args.length === 1) args.push(null, 2);
    writeFile.sync(dest, JSON.stringify.apply(JSON, args));
  } catch (err) {
    throw err;
  }
};
