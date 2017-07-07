const { expect } = require('chai');
const asb = require('../src');

describe('Schema builder', () => {
  it('builds', () => {
    const schema = asb
      .object()
      .properties({
        id: asb.integer().default(1),
        name: asb.string(),
        type: asb.const('test'),
        role: asb.enum(['user', 'admin']),
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
        id: { type: 'integer', default: 1 },
        name: { type: 'string' },
        type: { const: 'test' },
        role: { enum: ['user', 'admin'] },
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
