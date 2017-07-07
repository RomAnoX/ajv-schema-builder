const Keyword = require('./Keyword');

const FORMATS = [
  'date',
  'date-time',
  'uri',
  'email',
  'hostname',
  'ipv4',
  'ipv6',
  'regex',
];

class FormatKeyword extends Keyword {
  constructor(value) {
    super();
    this.value = value;
  }

  set value(value) {
    if (!FORMATS.includes(value)) {
      throw new Error('The format value is not valid');
    }
    this.format = value;
  }

  get value() {
    return this.format;
  }

  json(context = {}) {
    return Object.assign(context, { format: this.value });
  }
}

module.exports = FormatKeyword;
