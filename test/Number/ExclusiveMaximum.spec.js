const { expect } = require('chai');
const ExclusiveMaximumKeyword = require('../../src/Number/ExclusiveMaximum');

describe('ExclusiveMaximum keyword', () => {
  it('builds', () => {
    expect(new ExclusiveMaximumKeyword(5).json()).to.deep.eq({
      exclusiveMaximum: 5,
    });
  });

  it('builds with a string number', () => {
    expect(new ExclusiveMaximumKeyword('5').json()).to.deep.eq({
      exclusiveMaximum: 5,
    });
  });

  it('fails with no number value', () => {
    expect(() => new ExclusiveMaximumKeyword('string')).to.throw();
  });
});
