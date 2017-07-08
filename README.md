ajv-schema-builder
=========

[![npm version](https://badge.fury.io/js/ajv-schema-builder.svg)](https://badge.fury.io/js/ajv-schema-builder)
[![Build Status](https://travis-ci.org/RomAnoX/ajv-schema-builder.svg?branch=master)](https://travis-ci.org/RomAnoX/ajv-schema-builder)
[![Coverage Status](https://coveralls.io/repos/github/RomAnoX/ajv-schema-builder/badge.svg?branch=master)](https://coveralls.io/github/RomAnoX/ajv-schema-builder?branch=master)

A Fluent schema builder for [AJV](https://github.com/epoberezkin/ajv)

## Installation

  `npm install ajv-schema-builder`

## Usage

```javascript
const asb = require('ajv-schema-builder');

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

console.log(schema.json());
```

  Output should be

```javascript
{
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
}
```


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.
