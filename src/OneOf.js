const Keyword = require('./Keyword');

class OneOfKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    const items = Array.isArray(value) ? value : [value];
    items.forEach(item => Keyword.validate(item));
    this.items = items;
  }

  get value() {
    return this.items;
  }

  json(context = {}) {
    const items = this.value.map(value => value.json());
    return Object.assign(context, { oneOf: items });
  }
}

module.exports = OneOfKeyword;
