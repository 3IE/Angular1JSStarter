// Karma configuration
// Generated on Wed Nov 04 2015 09:11:11 GMT+0100 (Paris, Madrid)

'use strict';

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
			'bower_components/jquery/dist/jquery.js',
			'bower_components/angular/angular.js',
			'bower_components/angular-mocks/angular-mocks.js',
			'bower_components/angular-ui-router/release/angular-ui-router.js',
			'bower_components/angular-bootstrap/ui-bootstrap.js',
			'bower_components/angular-sanitize/angular-sanitize.js',
			'bower_components/angular-ui-mask/dist/mask.min.js',
			'bower_components/angular-ui-router/release/angular-ui-router.min.js',
			'bower_components/angular-ui-scroll/dist/ui-scroll.min.js',
			'bower_components/angular-ui-event/dist/event.min.js',
			'bower_components/angular-ui-scrollpoint/dist/scrollpoint.min.js',
			'bower_components/angular-ui-validate/dist/validate.min.js',
			'bower_components/angular-ui-indeterminate/dist/indeterminate.min.js',
			'bower_components/angular-ui-uploader/dist/uploader.min.js',
			'bower_components/angular-ui-utils/index.js',
			'bower_components/angular-google-analytics/dist/angular-google-analytics.min.js',
			'app/*.js',
			'app/**/*.js',
			'starterKitSDK/**/*.js',
			'common/**/*.js',
      'test/unit/**/*.js',
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  });
};
