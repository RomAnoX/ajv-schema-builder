const Keyword = require('./Keyword');

class ConstKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  json(context = {}) {
    return Object.assign(context, { const: this.value });
  }
}

module.exports = ConstKeyword;
