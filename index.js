/*!
 * write-json <https://github.com/jonschlinkert/write-json>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var path = require('path');

/**
 * Expose `writeJson`
 */

module.exports = function writeJson(dest, obj) {
  var dir = path.dirname(dest);
  if (!fs.existsSync(dir)) {
    mkdirSync(dir);
  }

  try {
    var json = JSON.stringify(obj, null, 2);
    fs.writeFileSync(dest, json);
  } catch (err) {
    throw err;
  }
};

/**
 * Make the dest directory and intermediates
 * if necessary.
 *
 * @param {String} `dest`
 * @param {Number} `mode`
 * @api private
 */

function mkdirSync(dest, mode) {
  mode = mode || parseInt('0777', 8) & (~process.umask());
  if (!fs.existsSync(dest)) {
    var dir = path.dirname(dest);

    if (fs.existsSync(dir)) {
      fs.mkdirSync(dest, mode);
    } else {
      mkdirSync(dir);
      fs.mkdirSync(dest, mode);
    }
  }
}
