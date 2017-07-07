const Keyword = require('./Keyword');

class RequiredKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    const fields = Array.isArray(value) ? value : [value];
    fields.forEach(field => {
      if (typeof field !== 'string') {
        throw new Error('Every required field should be a string');
      }
    });
    this.fields = fields;
  }

  get value() {
    return this.fields;
  }

  json(context = {}) {
    return Object.assign(context, { required: this.value });
  }
}

module.exports = RequiredKeyword;
