const { expect } = require('chai');
const StringKeyword = require('../src/String');

describe('String keyword', () => {
  it('builds', () => {
    expect(new StringKeyword().json()).to.deep.eq({ type: 'string' });
  });

  it('builds with default value', () => {
    expect(new StringKeyword().default('test').json()).to.deep.eq({
      type: 'string',
      default: 'test',
    });
  });

  it('builds with a format', () => {
    expect(new StringKeyword().format('email').json()).to.deep.eq({
      type: 'string',
      format: 'email',
    });
  });

  it('builds with a default and format values', () => {
    expect(
      new StringKeyword().format('email').default('test@test.com').json(),
    ).to.deep.eq({
      type: 'string',
      format: 'email',
      default: 'test@test.com',
    });
  });

  it('fails when default is not a string', () => {
    expect(() => new StringKeyword().default(2)).to.throw();
  });

  it('fails when format is not valid', () => {
    expect(() => new StringKeyword().format('not valid')).to.throw();
  });
});
