const { expect } = require('chai');
const MinimumKeyword = require('../../src/Number/Minimum');

describe('Minimum keyword', () => {
  it('builds', () => {
    expect(new MinimumKeyword(5).json()).to.deep.eq({
      minimum: 5,
    });
  });

  it('builds with a string number', () => {
    expect(new MinimumKeyword('5').json()).to.deep.eq({
      minimum: 5,
    });
  });

  it('fails with no number value', () => {
    expect(() => new MinimumKeyword('string')).to.throw();
  });
});
