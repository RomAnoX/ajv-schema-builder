const { expect } = require('chai');
const asb = require('../src');

describe('Schema builder', () => {
  it('builds', () => {
    const schema = asb
      .object()
      .properties({
        id: asb.type(['string', 'integer']).default(1),
        name: asb.string(),
        type: asb.const('test'),
        role: asb.enum(['user', 'admin']),
        age: asb.number(),
        enabled: asb.boolean().default(true),
        start_date: asb.oneOf([asb.string().format('date'), asb.integer()]),
        end_date: asb.anyOf([asb.string().format('date'), asb.integer()]),
        departments: asb.array().items(
          asb.object().properties({
            id: asb.integer().default(2),
            name: asb.string().default('department'),
          }),
        ),
      })
      .required(['id', 'name']);

    expect(schema.json()).to.deep.eq({
      type: 'object',
      properties: {
        id: { type: ['string', 'integer'], default: 1 },
        name: { type: 'string' },
        type: { const: 'test' },
        role: { enum: ['user', 'admin'] },
        age: { type: 'number' },
        enabled: { type: 'boolean', default: true },
        start_date: {
          oneOf: [{ type: 'string', format: 'date' }, { type: 'integer' }],
        },
        end_date: {
          anyOf: [{ type: 'string', format: 'date' }, { type: 'integer' }],
        },
        departments: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'integer', default: 2 },
              name: { type: 'string', default: 'department' },
            },
          },
        },
      },
      required: ['id', 'name'],
    });
  });
});
