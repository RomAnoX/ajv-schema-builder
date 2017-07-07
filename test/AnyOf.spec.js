const { expect } = require('chai');
const Keyword = require('../src/Keyword');
const AnyOfKeyword = require('../src/AnyOf');

class FakeKeyword extends Keyword {}

describe('AnyOf Keyword', () => {
  it('builds with valid keyword', () => {
    const keyword = new AnyOfKeyword(new FakeKeyword());
    expect(keyword.json()).to.deep.eq({ anyOf: [{}] });
  });

  it('builds with a valid array of keywords', () => {
    const keyword = new AnyOfKeyword([new FakeKeyword(), new FakeKeyword()]);
    expect(keyword.json()).to.deep.eq({ anyOf: [{}, {}] });
  });

  it('builds with valid keyword', () => {
    const keyword = new AnyOfKeyword(new FakeKeyword());
    expect(keyword.json({ foo: 'bar' })).to.deep.eq({
      foo: 'bar',
      anyOf: [{}],
    });
  });

  it('fails with a non keyword value', () => {
    expect(() => new AnyOfKeyword('notKeyword')).to.throw();
  });

  it('fails with a non keyword value in array', () => {
    expect(() => new AnyOfKeyword([new FakeKeyword(), 2])).to.throw();
  });
});
