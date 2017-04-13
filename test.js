'use strict';

require('mocha');
var fs = require('fs');
var assert = require('assert');
var writeJson = require('./');
var del = require('delete');

describe('write-json', function() {
  afterEach(function(cb) {
    del('actual', cb);
  });

  describe('async', function() {
    it('should write JSON asyncronously', function(cb) {
      var expected = {foo: {bar: "baz"} };
      writeJson('actual/test.json', expected, function(err) {
        fs.readFile('actual/test.json', 'utf8', function(err, res) {
          if (err) return cb(err);
          assert.deepEqual(JSON.parse(res), expected);
          cb();
        });
      });
    });

    it('should take additional JSON.stringify args', function(cb) {
      var expected = {foo: {bar: "baz"} };
      writeJson('actual/test.json', expected, null, 0, function(err) {
        fs.readFile('actual/test.json', 'utf8', function(err, res) {
          if (err) return cb(err);
          assert.deepEqual(JSON.parse(res), expected);
          cb();
        });
      });
    });
  });

  describe('sync', function() {
    it('should write JSON syncronously', function(cb) {
      var expected = {foo: {bar: "baz"} };
      writeJson.sync('actual/test.json', expected);
      var res = fs.readFileSync('actual/test.json', 'utf8');
      assert.deepEqual(JSON.parse(res), expected);
      cb();
    });

    it('should additional JSON.stringify args', function(cb) {
      var expected = {foo: {bar: "baz"} };
      writeJson.sync('actual/test.json', expected, null, 0);
      var res = fs.readFileSync('actual/test.json', 'utf8');
      assert.deepEqual(JSON.parse(res), expected);
      cb();
    });
  });
});
