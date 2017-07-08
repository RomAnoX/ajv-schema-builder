const { expect } = require('chai');
const ExclusiveMinimumKeyword = require('../../src/Number/ExclusiveMinimum');

describe('ExclusiveMinimum keyword', () => {
  it('builds', () => {
    expect(new ExclusiveMinimumKeyword(5).json()).to.deep.eq({
      exclusiveMinimum: 5,
    });
  });

  it('builds with a string number', () => {
    expect(new ExclusiveMinimumKeyword('5').json()).to.deep.eq({
      exclusiveMinimum: 5,
    });
  });

  it('fails with no number value', () => {
    expect(() => new ExclusiveMinimumKeyword('string')).to.throw();
  });
});
