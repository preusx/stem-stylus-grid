var su = require('stylus').utils,
    n = require('stylus/lib/nodes');

module.exports = function() {
  return function(style) {
    var u = style.options.extensions.utils,
        store = style.options.extensions.storage;

    store.set('stem-spacer__config', {
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
    });

    style.define('s-config', function(hash) {
      var data = u.merge(store.get('stem-spacer__config'), u.toJS(hash));

      store.set('stem-spacer__config', data);

      if(this.return) {
        return su.coerce(data, true);
      }
    });

    // var sDirection = function() {
    //   var dir = this.functions['var'].call(this, 'DIRECTION');
    //   var l = new n.Literal('left'),
    //       r = new n.Literal('right');

    //   return typeof dir == 'undefined' ? l : dir.string == 'ltr' ? l : r;
    // };
  };
};
