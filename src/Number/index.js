const Keyword = require('../Keyword');
const Default = require('../Default');
const Type = require('../Type');

const Minimum = require('./Minimum');
const Maximum = require('./Maximum');
const ExclusiveMinimum = require('./ExclusiveMinimum');
const ExclusiveMaximum = require('./ExclusiveMaximum');

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

  minimum(value) {
    this.addKeyword(new Minimum(value));
    return this;
  }

  maximum(value) {
    this.addKeyword(new Maximum(value));
    return this;
  }

  exclusiveMinimum(value) {
    this.addKeyword(new ExclusiveMinimum(value));
    return this;
  }

  exclusiveMaximum(value) {
    this.addKeyword(new ExclusiveMaximum(value));
    return this;
  }
}

module.exports = NumberKeyword;
