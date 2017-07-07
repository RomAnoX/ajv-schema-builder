const Keyword = require('./Keyword');

class EnumKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  json(context = {}) {
    const items = Array.isArray(this.value) ? this.value : [this.value];
    return Object.assign(context, { enum: items });
  }
}

module.exports = EnumKeyword;
