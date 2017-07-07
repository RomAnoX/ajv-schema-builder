const { expect } = require('chai');
const BooleanKeyword = require('../src/Boolean');

describe('Boolean keyword', () => {
  it('builds', () => {
    const keyword = new BooleanKeyword();
    expect(keyword.json()).to.deep.eq({ type: 'boolean' });
  });

  it('builds with default true', () => {
    const keyword = new BooleanKeyword().default(true);
    expect(keyword.json()).to.deep.eq({ type: 'boolean', default: true });
  });

  it('builds with default false', () => {
    const keyword = new BooleanKeyword().default(false);
    expect(keyword.json()).to.deep.eq({ type: 'boolean', default: false });
  });

  it('fails with default other than false/true', () => {
    expect(() => new BooleanKeyword().default('string')).to.throw();
  });
});
