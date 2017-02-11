'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-idyll:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({name: '__tmp'})
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '__tmp/index.idl',
      '__tmp/styles.css',
      '__tmp/package.json'
    ]);
  });
});
