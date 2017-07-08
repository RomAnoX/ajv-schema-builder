const Keyword = require('../Keyword');

class MaximumKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    const number = parseFloat(value);
    if (isNaN(number)) {
      throw 'maximum should be a valid number';
    }

    this.number = number;
  }

  get value() {
    return this.number;
  }

  json(context = {}) {
    return Object.assign(context, { maximum: this.value });
  }
}

module.exports = MaximumKeyword;
