'use strict';
var root = './src/';
var gulpConfig = {
    allts: root + '**/*.ts',
    allTypings: './typings/**/*.ts',
    outputFolder: './dist/',
    allTests: root + 'test/**/*.ts'
}

module.exports = gulpConfig;