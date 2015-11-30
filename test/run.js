var testRunnerConfig = {
  describe: 'Stem stylus grid',
  stylus: {
    use: function plugin(stylus) {
      stylus.include(__dirname + '../');
    },
    import: [
      '../bower_components/stem-stylus-extensions',
      '../bower_components/stem-stylus-responsive',
      '../index'
      ]
  }
}

require('stylus-test-runner')(testRunnerConfig);
