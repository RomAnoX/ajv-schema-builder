const Keyword = require('./Keyword');
const Default = require('./Default');

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
    const list = Array.isArray(value) ? value : [value];

    list.forEach(item => {
      if (!TYPES.includes(item)) {
        throw new Error('The type is invalid');
      }
    });

    this.type = value;
  }

  get value() {
    return this.type;
  }

  default(value) {
    this.addKeyword(new Default(value));
    return this;
  }

  json(context = {}) {
    return Object.assign(this.keywordsContext(context), { type: this.value });
  }
}

module.exports = TypeKeyword;
