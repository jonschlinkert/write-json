# write-json [![NPM version](https://img.shields.io/npm/v/write-json.svg?style=flat)](https://www.npmjs.com/package/write-json) [![NPM monthly downloads](https://img.shields.io/npm/dm/write-json.svg?style=flat)](https://npmjs.org/package/write-json) [![NPM total downloads](https://img.shields.io/npm/dt/write-json.svg?style=flat)](https://npmjs.org/package/write-json) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/write-json.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/write-json)

> Write a JSON file to disk, also creates intermediate directories in the destination path if they don't already exist.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save write-json
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add write-json
```

## Usage

```js
var writeJson = require('write-json'); 

// async
writeJson('foo.json', {abc: 'xyz'}, function(err) {
  // do stuff with err
});

// sync
writeJson.sync('foo.json', {abc: 'xyz'});
```

## JSON.stringify

Supports the same arguments as [JSON.stringify](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)

```js
// async
writeJson('foo.json', {abc: 'xyz'}, null, 2, function(err) {
  // do stuff with err
});

// sync
writeJson.sync('foo.json', {abc: 'xyz'}, null, 2);
```

## Release history

### v2.0.0 - 2017-07-10

**Added**

* [promise support](#promise)

**Changed**

* The main function now returns a promise if no callback is passed

### v1.0.0 - 2017-04-12

**Fixed**

* Make sure `JSON.stringify` receives all intended arguments

## About

### Related projects

* [delete](https://www.npmjs.com/package/delete): Delete files and folders and any intermediate directories if they exist (sync and async). | [homepage](https://github.com/jonschlinkert/delete "Delete files and folders and any intermediate directories if they exist (sync and async).")
* [read-data](https://www.npmjs.com/package/read-data): Read JSON or YAML files. | [homepage](https://github.com/jonschlinkert/read-data "Read JSON or YAML files.")
* [read-json](https://www.npmjs.com/package/read-json): Reads and parses a JSON file. | [homepage](https://github.com/n-johnson/read-json#readme "Reads and parses a JSON file.")
* [read-yaml](https://www.npmjs.com/package/read-yaml): Very thin wrapper around js-yaml for directly reading in YAML files. | [homepage](https://github.com/jonschlinkert/read-yaml "Very thin wrapper around js-yaml for directly reading in YAML files.")
* [write-yaml](https://www.npmjs.com/package/write-yaml): Write YAML. Converts JSON to YAML writes it to the specified file. | [homepage](https://github.com/jonschlinkert/write-yaml "Write YAML. Converts JSON to YAML writes it to the specified file.")
* [write](https://www.npmjs.com/package/write): Write files to disk, creating intermediate directories if they don't exist. | [homepage](https://github.com/jonschlinkert/write "Write files to disk, creating intermediate directories if they don't exist.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on July 11, 2017._