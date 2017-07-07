const { expect } = require('chai');
const Keyword = require('../src/Keyword');
const ObjectKeyword = require('../src/Object');

describe('Object keyword', () => {
  it('builds', () => {
    expect(new ObjectKeyword().json()).to.deep.eq({ type: 'object' });
  });

  it('builds with default value', () => {
    expect(new ObjectKeyword().default({ foo: 'bar' }).json()).to.deep.eq({
      type: 'object',
      default: { foo: 'bar' },
    });
  });

  it('builds with properties', () => {
    expect(
      new ObjectKeyword()
        .properties({
          id: new Keyword(),
          email: new Keyword(),
        })
        .json(),
    ).to.deep.eq({
      type: 'object',
      properties: {
        id: {},
        email: {},
      },
    });
  });

  it('builds with properties and default', () => {
    expect(
      new ObjectKeyword()
        .properties({
          id: new Keyword(),
          email: new Keyword(),
        })
        .default({ foo: 'bar' })
        .json(),
    ).to.deep.eq({
      type: 'object',
      properties: {
        id: {},
        email: {},
      },
      default: { foo: 'bar' },
    });
  });

  it('builds with required fields', () => {
    expect(new ObjectKeyword().required(['id', 'name']).json()).to.deep.eq({
      type: 'object',
      required: ['id', 'name'],
    });
  });

  it('builds with properties, default and requried', () => {
    expect(
      new ObjectKeyword()
        .properties({
          id: new Keyword(),
          email: new Keyword(),
        })
        .required(['id', 'email'])
        .default({ foo: 'bar' })
        .json(),
    ).to.deep.eq({
      type: 'object',
      properties: {
        id: {},
        email: {},
      },
      required: ['id', 'email'],
      default: { foo: 'bar' },
    });
  });
});
