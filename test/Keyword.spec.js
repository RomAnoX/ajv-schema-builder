const { expect } = require('chai');
const Keyword = require('../src/Keyword');

class FakeKeyword extends Keyword {
  // eslint-disable-next-line
  json(context = {}) {
    return Object.assign(context, { foo: 'bar' });
  }
}

describe('Keyword root class', () => {
  it('builds', () => {
    expect(new Keyword().json()).to.deep.eq({});
  });

  it('builds with added keyword', () => {
    const keyword = new Keyword();
    keyword.addKeyword(new FakeKeyword());
    expect(keyword.json()).to.deep.eq({ foo: 'bar' });
  });

  it('fail on adding a no keyword', () => {
    const keyword = new Keyword();
    expect(() => keyword.addKeyword('string')).to.throw();
  });
});
