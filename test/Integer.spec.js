const { expect } = require('chai');
const IntegerKeyword = require('../src/Integer');

describe('Integer keyword', () => {
  it('builds', () => {
    expect(new IntegerKeyword().json()).to.deep.eq({ type: 'integer' });
  });

  it('builds with a default value', () => {
    expect(new IntegerKeyword().default(1).json()).to.deep.eq({
      type: 'integer',
      default: 1,
    });
  });

  it('fails with a string as default', () => {
    expect(() => new IntegerKeyword().default('number')).to.throw();
  });

  it('fails with a none integer', () => {
    expect(() => new IntegerKeyword().default(2.5)).to.throw();
  });
});
