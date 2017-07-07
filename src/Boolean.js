const Keyword = require('./Keyword');
const Default = require('./Default');
const Type = require('./Type');

class BooleanKeyword extends Keyword {
  constructor() {
    super();
    this.addKeyword(new Type('boolean'));
  }

  default(value) {
    if (value !== true && value !== false) {
      throw new Error('Default value should be true or false');
    }
    this.addKeyword(new Default(value));
    return this;
  }
}

module.exports = BooleanKeyword;
