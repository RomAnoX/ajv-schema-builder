const ObjectKeyword = require('./Object');
const ArrayKeyword = require('./Array');
const StringKeyword = require('./String');
const IntegerKeyword = require('./Integer');
const NumberKeyword = require('./Number');
const BooleanKeyword = require('./Boolean');
const TypeKeyword = require('./Type');
const EnumKeyword = require('./Enum');
const ConstKeyword = require('./Const');
const OneOfKeyword = require('./OneOf');
const AnyOfKeyword = require('./AnyOf');

module.exports = {
  object: () => new ObjectKeyword(),
  array: () => new ArrayKeyword(),
  string: () => new StringKeyword(),
  integer: () => new IntegerKeyword(),
  number: () => new NumberKeyword(),
  boolean: () => new BooleanKeyword(),

  type: value => new TypeKeyword(value),
  enum: value => new EnumKeyword(value),
  const: value => new ConstKeyword(value),
  oneOf: value => new OneOfKeyword(value),
  anyOf: value => new AnyOfKeyword(value),
};
