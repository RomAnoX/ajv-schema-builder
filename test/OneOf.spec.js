const { expect } = require('chai');
const Keyword = require('../src/Keyword');
const OneOfKeyword = require('../src/OneOf');

class FakeKeyword extends Keyword {}

describe('OneOf Keyword', () => {
  it('builds with valid keyword', () => {
    const keyword = new OneOfKeyword(new FakeKeyword());
    expect(keyword.json()).to.deep.eq({ oneOf: [{}] });
  });

  it('builds with a valid array of keywords', () => {
    const keyword = new OneOfKeyword([new FakeKeyword(), new FakeKeyword()]);
    expect(keyword.json()).to.deep.eq({ oneOf: [{}, {}] });
  });

  it('builds with valid keyword', () => {
    const keyword = new OneOfKeyword(new FakeKeyword());
    expect(keyword.json({ foo: 'bar' })).to.deep.eq({
      foo: 'bar',
      oneOf: [{}],
    });
  });

  it('fails with a non keyword value', () => {
    expect(() => new OneOfKeyword('notKeyword')).to.throw();
  });

  it('fails with a non keyword value in array', () => {
    expect(() => new OneOfKeyword([new FakeKeyword(), 2])).to.throw();
  });
});
