const { expect } = require('chai');
const FormatKeyword = require('../src/Format');

describe('Format keyword', () => {
  it('builds with a valid format', () => {
    const keyword = new FormatKeyword('email');
    expect(keyword.json()).to.deep.eq({ format: 'email' });
  });

  it('builds with constext', () => {
    const keyword = new FormatKeyword('email');
    expect(keyword.json({ foo: 'bar' })).to.deep.eq({
      foo: 'bar',
      format: 'email',
    });
  });

  it('fails with a no valid format', () => {
    expect(() => new FormatKeyword('noFormat')).to.throw();
  });
});
