const { expect } = require('chai');
const MaximumKeyword = require('../../src/Number/Maximum');

describe('Maximum keyword', () => {
  it('builds', () => {
    expect(new MaximumKeyword(5).json()).to.deep.eq({
      maximum: 5,
    });
  });

  it('builds with a string number', () => {
    expect(new MaximumKeyword('5').json()).to.deep.eq({
      maximum: 5,
    });
  });

  it('fails with no number value', () => {
    expect(() => new MaximumKeyword('string')).to.throw();
  });
});
