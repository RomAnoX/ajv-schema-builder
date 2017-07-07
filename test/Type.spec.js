const { expect } = require('chai');
const TypeKeyword = require('../src/Type');

describe('Type keyword', () => {
  it('builds', () => {
    expect(new TypeKeyword('string').json()).to.deep.eq({ type: 'string' });
  });

  it('builds with context', () => {
    expect(new TypeKeyword('integer').json({ foo: 'bar' })).to.deep.eq({
      type: 'integer',
      foo: 'bar',
    });
  });

  it('fails with a no valid type', () => {
    expect(() => new TypeKeyword('keyword')).to.throw();
  });
});
