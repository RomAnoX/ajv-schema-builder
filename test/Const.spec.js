const { expect } = require('chai');
const ConstKeyword = require('../src/Const');

describe('Const keyword', () => {
  it('builds with a string', () => {
    const keyword = new ConstKeyword('string');
    expect(keyword.json()).to.deep.eq({ const: 'string' });
  });

  it('builds with an integer', () => {
    const keyword = new ConstKeyword(1);
    expect(keyword.json()).to.deep.eq({ const: 1 });
  });

  it('builds with an object', () => {
    const keyword = new ConstKeyword({ foo: 'bar' });
    expect(keyword.json()).to.deep.eq({ const: { foo: 'bar' } });
  });

  it('builds with am array', () => {
    const keyword = new ConstKeyword([1, 2, 3]);
    expect(keyword.json()).to.deep.eq({ const: [1, 2, 3] });
  });
});
