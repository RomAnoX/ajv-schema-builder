const { expect } = require('chai');
const Keyword = require('../src/Keyword');
const PropertiesKeyword = require('../src/Properties');

describe('Properties keyword', () => {
  it('builds', () => {
    expect(new PropertiesKeyword().json()).to.deep.eq({
      properties: {},
    });
  });

  it('builds with initial properties', () => {
    expect(new PropertiesKeyword({ foo: new Keyword() }).json()).to.deep.eq({
      properties: { foo: {} },
    });
  });

  it('adds a property keyword', () => {
    const keyword = new PropertiesKeyword();
    keyword.addProperty('foo', new Keyword());
    expect(keyword.json()).to.deep.eq({ properties: { foo: {} } });
  });

  it('fails with a no keyword property', () => {
    expect(() => new PropertiesKeyword({ foo: 'bar' })).to.throw();
  });

  it('fails when adding a no keyword property', () => {
    const keyword = new PropertiesKeyword();
    expect(() => keyword.add({ foo: 'bar' })).to.throw();
  });
});
