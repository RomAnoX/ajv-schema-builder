const { expect } = require('chai');
const Keyword = require('../src/Keyword');
const ItemsKeyword = require('../src/Items');

describe('Items keyword', () => {
  it('builds with a valid keyword', () => {
    const keyword = new ItemsKeyword(new Keyword());
    expect(keyword.json()).to.deep.eq({ items: {} });
  });

  it('fails with a no keyword value', () => {
    expect(() => new ItemsKeyword('noKeyword')).to.throw();
  });
});
