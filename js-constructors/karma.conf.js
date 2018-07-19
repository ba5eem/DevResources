module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],
    files: [
      'test/*.spec.js',
      'constructors.js'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS']
  });
};
