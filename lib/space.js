var su = require('stylus').utils,
    n = require('stylus/lib/nodes');

module.exports = function() {
  return function(style) {
    var u = style.options.extensions.utils,
        storage = style.options.extensions.storage;

    storage.set('stem-grid-space__config', {
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

    style.define('g-space-config', function(hash) {
      var data = u.merge(storage.get('stem-grid-space__config'), u.toJS(hash));

      storage.set('stem-grid-space__config', data);

      if(this.return) {
        return su.coerce(data, true);
      }
    });


    var gSpace = function(size, lower) {
      var c = storage.get('stem-grid-space__config'),
          f = this.functions;

      if(size.nodeName == 'string' || size.nodeName == 'literal' || size.nodeName == 'ident') {
        return gSpace.call(this, c.size[size.string], lower);
      }

      lower = typeof lower != 'undefined' ? lower.val : false;

      if(size.nodeName == 'unit') {
        if(!!size.type) {
          size = f['to-unit'].call(this, size, c.base.type);
          size = f['scale-modular_reverse']
            .call(this, c.base, size, c.scale, new n.Boolean(true));
          size.type = '';
        }

        var r = f['scale-modular']
            .call(this, c.base, size, c.scale);

        r.type = c.base.type;

        return r;
      }

      return 0;
    };

    style.define('g-space', gSpace);

    // var sDirection = function() {
    //   var dir = this.functions['var'].call(this, 'DIRECTION');
    //   var l = new n.Literal('left'),
    //       r = new n.Literal('right');

    //   return typeof dir == 'undefined' ? l : dir.string == 'ltr' ? l : r;
    // };
  };
};
