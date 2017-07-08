const { expect } = require('chai');
const TypeKeyword = require('../src/Type');

describe('Type keyword', () => {
  it('builds', () => {
    expect(new TypeKeyword('string').json()).to.deep.eq({ type: 'string' });
  });

  it('builds with default', () => {
    expect(new TypeKeyword('boolean').default(false).json()).to.deep.eq({
      type: 'boolean',
      default: false,
    });
  });

  it('builds with context', () => {
    expect(new TypeKeyword('integer').json({ foo: 'bar' })).to.deep.eq({
      type: 'integer',
      foo: 'bar',
    });
  });

  it('builds with an array of types', () => {
    expect(new TypeKeyword(['string', 'integer']).json()).to.deep.eq({
      type: ['string', 'integer'],
    });
  });

  it('fails with a no valid type', () => {
    expect(() => new TypeKeyword('keyword')).to.throw();
  });

  it('fails with a no valid type in array', () => {
    expect(() => new TypeKeyword(['string', 'keyword'])).to.throw();
  });
});
