const Keyword = require('./Keyword');

class PropertiesKeyword extends Keyword {
  constructor(value = {}) {
    super();
    this.properties = {};
    this.value = value;
  }

  set value(value) {
    if (typeof value !== 'object') {
      throw new Error('The value should be an object');
    }
    Object.keys(value).forEach(key => this.addProperty(key, value[key]));
  }

  get value() {
    return this.properties;
  }

  get length() {
    return Object.keys(this.properties).length;
  }

  addProperty(name, keyword) {
    Keyword.validate(keyword);
    this.properties[name] = keyword;
  }

  json(context = {}) {
    const properties = Object.keys(this.value).reduce(
      (initial, key) =>
        Object.assign(initial, { [key]: this.value[key].json() }),
      {},
    );
    return Object.assign(context, { properties });
  }
}

module.exports = PropertiesKeyword;
