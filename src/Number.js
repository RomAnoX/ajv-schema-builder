const Keyword = require('./Keyword');
const Default = require('./Default');
const Type = require('./Type');

class NumberKeyword extends Keyword {
  constructor() {
    super();
    this.addKeyword(new Type('number'));
  }

  default(value) {
    if (typeof value !== 'number') {
      throw new Error('The value should be a number');
    }
    this.addKeyword(new Default(value));
    return this;
  }
}

module.exports = NumberKeyword;
