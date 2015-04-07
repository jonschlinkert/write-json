/*!
 * write-json <https://github.com/jonschlinkert/write-json>
 *
 * Copyright (c) 2015 Jon Schlinkert.
 * Licensed under the MIT license.
 */

'use strict';

/* deps:mocha */
var fs = require('fs');
var assert = require('assert');
var should = require('should');
var del = require('delete');
var writeJson = require('./');

describe('async', function () {
  after(function (cb) {
    del('actual', cb);
  });

  it('should write JSON asyncronously', function (cb) {
    var expected = {foo: {bar: "baz"} };
    writeJson('actual/test.json', expected, function (err) {
      fs.readFile('actual/test.json', 'utf8', function (err, res) {
        if (err) {
          console.log(err);
          return cb(err);
        }
        JSON.parse(res).should.eql(expected);
        cb();
      });
    });
  });
});

describe('sync', function () {
  it('should write JSON syncronously', function () {
    var expected = {foo: {bar: "baz"} };
    writeJson.sync('actual/test.json', expected);
    var res = fs.readFileSync('actual/test.json', 'utf8');
    JSON.parse(res).should.eql(expected);
    del.sync('actual');
  });
});
