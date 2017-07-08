const Keyword = require('../Keyword');

class MinimumKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    const number = parseFloat(value);
    if (isNaN(number)) {
      throw 'minimum should be a valid number';
    }

    this.number = number;
  }

  get value() {
    return this.number;
  }

  json(context = {}) {
    return Object.assign(context, { minimum: this.value });
  }
}

module.exports = MinimumKeyword;
