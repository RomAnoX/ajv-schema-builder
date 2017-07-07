const Keyword = require('./Keyword');

const TYPES = [
  'number',
  'integer',
  'string',
  'boolean',
  'array',
  'object',
  'null',
];

class TypeKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    if (!TYPES.includes(value)) {
      throw new Error('The type is invalid');
    }
    this.type = value;
  }

  get value() {
    return this.type;
  }

  json(context = {}) {
    return Object.assign(context, { type: this.value });
  }
}

module.exports = TypeKeyword;
