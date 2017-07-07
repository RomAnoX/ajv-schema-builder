const { expect } = require('chai');
const DefaultKeyword = require('../src/Default');

describe('Default keyword', () => {
  it('builds', () => {
    const keyword = new DefaultKeyword({ valid: true });
    expect(keyword.json()).to.deep.eq({ default: { valid: true } });
  });

  it('builds with context', () => {
    const keyword = new DefaultKeyword({ valid: true });
    expect(keyword.json({ foo: 'bar' })).to.deep.eq({
      foo: 'bar',
      default: { valid: true },
    });
  });
});
