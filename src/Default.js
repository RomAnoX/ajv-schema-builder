const Keyword = require('./Keyword');

class DefaultKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  json(context = {}) {
    return Object.assign(context, { default: this.value });
  }
}

module.exports = DefaultKeyword;
