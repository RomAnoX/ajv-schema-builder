const { expect } = require('chai');
const NumberKeyword = require('../../src/Number');

describe('Number keyword', () => {
  it('builds', () => {
    expect(new NumberKeyword().json()).to.deep.eq({ type: 'number' });
  });

  it('builds with a default value', () => {
    expect(new NumberKeyword().default(1).json()).to.deep.eq({
      type: 'number',
      default: 1,
    });
  });

  it('builds with a default float value', () => {
    expect(new NumberKeyword().default(2.5).json()).to.deep.eq({
      type: 'number',
      default: 2.5,
    });
  });

  it('builds with a minimum value', () => {
    expect(new NumberKeyword().minimum(2.5).json()).to.deep.eq({
      type: 'number',
      minimum: 2.5,
    });
  });

  it('builds with a maximum value', () => {
    expect(new NumberKeyword().maximum(2.5).json()).to.deep.eq({
      type: 'number',
      maximum: 2.5,
    });
  });

  it('builds with an exclusive minimum value', () => {
    expect(new NumberKeyword().exclusiveMinimum(2.5).json()).to.deep.eq({
      type: 'number',
      exclusiveMinimum: 2.5,
    });
  });

  it('builds with an exclusive maximum value', () => {
    expect(new NumberKeyword().exclusiveMaximum(2.5).json()).to.deep.eq({
      type: 'number',
      exclusiveMaximum: 2.5,
    });
  });

  it('builds with chain methods', () => {
    expect(
      new NumberKeyword().minimum(2).exclusiveMaximum(10).default(5).json(),
    ).to.deep.eq({
      type: 'number',
      minimum: 2,
      exclusiveMaximum: 10,
      default: 5,
    });
  });

  it('fails with a string as default', () => {
    expect(() => new NumberKeyword().default('number')).to.throw();
  });
});
