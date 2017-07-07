const { expect } = require('chai');
const NumberKeyword = require('../src/Number');

describe('Number keyword', () => {
  it('builds', () => {
    expect(new NumberKeyword().json()).to.deep.eq({ type: 'number' });
  });

  it('builds with a default value', () => {
    expect(new NumberKeyword().default(1).json()).to.deep.eq({
      type: 'number',
      default: 1,
    });
  });

  it('builds with a default float value', () => {
    expect(new NumberKeyword().default(2.5).json()).to.deep.eq({
      type: 'number',
      default: 2.5,
    });
  });

  it('fails with a string as default', () => {
    expect(() => new NumberKeyword().default('number')).to.throw();
  });
});
