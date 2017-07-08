const Keyword = require('../Keyword');

class ExclusiveMaximumKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    const number = parseFloat(value);
    if (isNaN(number)) {
      throw 'exclusive maximum should be a valid number';
    }

    this.number = number;
  }

  get value() {
    return this.number;
  }

  json(context = {}) {
    return Object.assign(context, { exclusiveMaximum: this.value });
  }
}

module.exports = ExclusiveMaximumKeyword;
