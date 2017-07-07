const Keyword = require('./Keyword');
const Default = require('./Default');
const Required = require('./Required');
const Properties = require('./Properties');
const Type = require('./Type');

class ObjectKeyword extends Keyword {
  constructor() {
    super();
    this.addKeyword(new Type('object'));
  }

  default(value) {
    this.addKeyword(new Default(value));
    return this;
  }

  properties(data) {
    this.addKeyword(new Properties(data));
    return this;
  }

  required(fields) {
    this.addKeyword(new Required(fields));
    return this;
  }
}

module.exports = ObjectKeyword;
