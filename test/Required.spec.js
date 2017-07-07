const { expect } = require('chai');
const RequiredKeyword = require('../src/Required');

describe('Required keyword', () => {
  it('builds with a single value', () => {
    expect(new RequiredKeyword('email').json()).to.deep.eq({
      required: ['email'],
    });
  });

  it('builds with a list of values', () => {
    expect(new RequiredKeyword(['email', 'name']).json()).to.deep.eq({
      required: ['email', 'name'],
    });
  });

  it('fails with a no string value', () => {
    expect(() => new RequiredKeyword(2)).to.throw();
  });

  it('fails with a no string value in the list', () => {
    expect(() => new RequiredKeyword(['email', 2])).to.throw();
  });
});
