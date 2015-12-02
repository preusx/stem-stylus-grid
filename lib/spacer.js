var su = require('stylus').utils,
    n = require('stylus/lib/nodes');

module.exports = function() {
  return function(style) {
    var u = style.options.extensions.utils;

    var Config = {
      base: new n.Unit(.25, 'rem'),
      scale: new n.Unit(2),

      size: {
        none:    new n.Unit(0),
        xs:      new n.Unit(1),
        sm:      new n.Unit(2),
        md:      new n.Unit(3),
        lg:      new n.Unit(4),
        xl:      new n.Unit(5),
        giant:   new n.Unit(6),
        mega:    new n.Unit(7),
        giga:    new n.Unit(8),
      }
    }

    var sConfig = function(hash) {
      // console.log(su.coerce(hash, true));
      // console.log(hash.vals.base.__proto__);
      // console.log(hash.vals.base.nodeName);
      // console.log(su.merge(hash, su.coerce(Config, true)).toExpression());
      console.log(su.coerce.toString());
    };

    // var sDirection = function() {
    //   var dir = this.functions['var'].call(this, 'DIRECTION');
    //   var l = new n.Literal('left'),
    //       r = new n.Literal('right');

    //   return typeof dir == 'undefined' ? l : dir.string == 'ltr' ? l : r;
    // };

    style.define('s-config', sConfig);

  };
};
