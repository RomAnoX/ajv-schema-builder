const { expect } = require('chai');
const EnumKeyword = require('../src/Enum');

describe('Enum Keyword', () => {
  it('builds with string', () => {
    const keyword = new EnumKeyword('value');
    expect(keyword.json()).to.deep.eq({ enum: ['value'] });
  });

  it('builds with integer', () => {
    const keyword = new EnumKeyword(1);
    expect(keyword.json()).to.deep.eq({ enum: [1] });
  });

  it('builds with object', () => {
    const keyword = new EnumKeyword({ foo: 'bar' });
    expect(keyword.json()).to.deep.eq({ enum: [{ foo: 'bar' }] });
  });

  it('builds with array', () => {
    const keyword = new EnumKeyword([2, 'foo', { bar: 1 }]);
    expect(keyword.json()).to.deep.eq({ enum: [2, 'foo', { bar: 1 }] });
  });

  it('build with context', () => {
    const keyword = new EnumKeyword([2, 'foo', { bar: 1 }]);
    expect(keyword.json({ test: 'foo' })).to.deep.eq({
      enum: [2, 'foo', { bar: 1 }],
      test: 'foo',
    });
  });
});
