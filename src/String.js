const Keyword = require('./Keyword');
const Default = require('./Default');
const Format = require('./Format');
const Type = require('./Type');

class StringKeyword extends Keyword {
  constructor() {
    super();
    this.addKeyword(new Type('string'));
  }

  default(value) {
    if (typeof value !== 'string') {
      throw new Error('The default value should be a string');
    }
    this.addKeyword(new Default(value));
    return this;
  }

  format(value) {
    this.addKeyword(new Format(value));
    return this;
  }
}

module.exports = StringKeyword;
