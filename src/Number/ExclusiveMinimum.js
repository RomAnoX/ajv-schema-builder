const Keyword = require('../Keyword');

class ExclusiveMinimumKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    const number = parseFloat(value);
    if (isNaN(number)) {
      throw 'exclusive minimum should be a valid number';
    }

    this.number = number;
  }

  get value() {
    return this.number;
  }

  json(context = {}) {
    return Object.assign(context, { exclusiveMinimum: this.value });
  }
}

module.exports = ExclusiveMinimumKeyword;
