import path from 'path';
import fs from 'fs';
import assert from 'assert';
import { transformFileSync } from 'babel-core';
import normalize from 'normalize-newline';
import plugin from '../../src';

function trim(str) {
  return normalize(str.replace(/^\s+|\s+$/, ''));
}

describe('mocktail babel plugin', () => {
  const fixturesDir = path.resolve(__dirname, '../fixtures');

  fs.readdirSync(fixturesDir).map((caseName) => {
    it(`should mock ${caseName.split('-').join(' ')}`, () => {
      const fixtureDir = path.join(fixturesDir, caseName);
      const actualPath = path.join(fixtureDir, 'actual.js');
      const actual = transformFileSync(actualPath, {
        "presets": [null],
        "plugins": [
          ["../../../src"],
        ],
      }).code;

      const expected = fs.readFileSync(
          path.join(fixtureDir, 'expected.js')
      ).toString();

      assert.equal(trim(actual), trim(expected));
    });
  });

});
