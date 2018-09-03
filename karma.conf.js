//jshint strict: false
module.exports = function(config) {
  config.set({

    basePath: './app',

    files: [
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/angular-mocks/angular-mocks.js',
      'components/**/*.js',
      'directives/**/*.js',
      'components/**/*.html',
      'directives/**/*.html'
    ],

    singleRun: true, 

    autoWatch: true,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins: [
      'karma-ng-html2js-preprocessor',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-jasmine',
      'karma-junit-reporter'
    ],

    preprocessors: {
      'components/**/*.html': [ 'ng-html2js' ],
      'directives/**/*.html': [ 'ng-html2js' ]
    },

    ngHtml2JsPreprocessor: {
      moduleName: 'app-templates'
    },

    reporters: ['progress'],

    junitReporter: {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
