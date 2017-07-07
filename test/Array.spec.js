const { expect } = require('chai');
const Keyword = require('../src/Keyword');
const ArrayKeyword = require('../src/Array');

describe('Array keyword', () => {
  it('builds an array without items', () => {
    const keyword = new ArrayKeyword();
    expect(keyword.json()).to.deep.eq({ type: 'array' });
  });

  it('builds an array with a keyword item', () => {
    const keyword = new ArrayKeyword().items(new Keyword());
    expect(keyword.json()).to.deep.eq({ type: 'array', items: {} });
  });

  it('builds an array with a context', () => {
    const keyword = new ArrayKeyword();
    expect(keyword.json({ foo: 'bar' })).to.deep.eq({
      foo: 'bar',
      type: 'array',
    });
  });

  it('fails with a no keywerd item', () => {
    expect(() => new ArrayKeyword().items([])).to.throw();
  });
});
