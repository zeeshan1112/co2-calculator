module.exports = function(config) {
    'use strict';
    var sourcePreprocessors = ['coverage'];

    function isDebug(argument) {
        return argument === '--debug';
    }
    if (process.argv.some(isDebug)) {
        sourcePreprocessors = [];
    }
    config.set({
        // list of files / patterns to load in the browser
        basePath: '',
        files: [
            'test/mocks/mock.js',
            'co2-calculator.js',
            'test/js/co2-calculatorSpec.js'
        ],

        exclude: [],

        // frameworks to use
        frameworks: ['jasmine'],

        autoWatch: true,

        browsers: ['Chrome'],
        browserNoActivityTimeout: 100000,

        // coverage reporter generates the coverage
        reporters: ['spec', 'coverage', 'kjhtml'],
        specReporter: {
            suppressSkipped: true
        },

        preprocessors: {
            // source files, that you wanna generate coverage for
            // do not include tests or libraries
            // (these files will be instrumented by Istanbul)
            'co2-calculator.js': sourcePreprocessors
        },

        singleRun: false,

        // optionally, configure the reporter
        coverageReporter: {
            dir: 'target/coverage/',
            reporters: [{
                type: 'html',
                subdir: 'report-html'
            }],
            instrumenterOptions: {
                istanbul: {
                    noCompact: true
                }
            }
        },
        //plugins: ['karma-browserify', 'karma-jasmine', 'karma-coverage', 'karma-spec-reporter', 'karma-jasmine-html-reporter', 'karma-chrome-launcher', 'watchify'],
    });
};