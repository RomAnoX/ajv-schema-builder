const Keyword = require('./Keyword');
const Items = require('./Items');
const Type = require('./Type');

class ArrayKeyword extends Keyword {
  constructor() {
    super();
    this.addKeyword(new Type('array'));
  }

  items(value) {
    this.addKeyword(new Items(value));
    return this;
  }
}

module.exports = ArrayKeyword;
