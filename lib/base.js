var n = require('stylus/lib/nodes');

module.exports = function() {
  return function(style) {
    var u = style.options.extensions.utils;

    var gDirection = function() {
      var dir = this.functions['var'].call(this, 'DIRECTION');
      var l = new n.Literal('left'),
          r = new n.Literal('right');

      return typeof dir == 'undefined' ? l : dir.string == 'ltr' ? l : r;
    };

    var gConfig
  };
};
