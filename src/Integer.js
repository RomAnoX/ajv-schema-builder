const Keyword = require('./Keyword');
const Default = require('./Default');
const Type = require('./Type');

class IntegerKeyword extends Keyword {
  constructor() {
    super();
    this.addKeyword(new Type('integer'));
  }

  default(value) {
    if (typeof value !== 'number' || value % 1 !== 0) {
      throw new Error('The value should be an integer');
    }
    this.addKeyword(new Default(value));
    return this;
  }
}

module.exports = IntegerKeyword;
