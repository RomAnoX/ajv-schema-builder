const Keyword = require('./Keyword');

class ItemsKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    Keyword.validate(value);
    this.item = value;
  }

  get value() {
    return this.item;
  }

  json(context = {}) {
    const items = this.value.json();
    return Object.assign(context, { items });
  }
}

module.exports = ItemsKeyword;
