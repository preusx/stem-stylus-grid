var su = require('stylus').utils,
    n = require('stylus/lib/nodes');

module.exports = function() {
  return function(style) {
    var u = style.options.extensions.utils,
        store = style.options.extensions.storage;

    var sSpace = function(size, lower) {
      var с = store.get('stem-spacer__config');
      lower = typeof lower == 'undefined' ? lower.val : false;

      if(size.nodeName == 'string') {
        sSpace(c.size[size.string]);
      }

      if(size.nodeName == 'unit') {
        if(!!size.type) {
          size = this.functions['scale-modular_reverse']
            .call(this, c.base, size, c.scale, new n.Boolean(true));
        }

        var r = this.functions['scale-modular']
            .call(this, c.base, size, c.scale);

        r.type = c.base.type;

        return r;
      }

      return n.null;
    };

    style.define('s-space', sSpace);
  };
};
