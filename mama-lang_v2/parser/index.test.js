const { tokenize } = require('../lexer')
const { parse } = require('./index')

describe('Parser', () => {
  test('parses variable declaration with number', () => {
    const tokens = tokenize('mama aida hoilo x = 5')
    const ast = parse(tokens)
    expect(ast).toEqual({
      type: 'Program',
      body: [
        {
          type: 'VariableDeclaration',
          identifier: 'x',
          value: { type: 'NumericLiteral', value: 5 },
        },
      ],
    })
  })

  test('parses arithmetic expression', () => {
    const tokens = tokenize('mama aida hoilo x = 5 + 10')
    const ast = parse(tokens)
    expect(ast).toEqual({
      type: 'Program',
      body: [
        {
          type: 'VariableDeclaration',
          identifier: 'x',
          value: {
            type: 'BinaryExpression',
            operator: '+',
            left: { type: 'NumericLiteral', value: 5 },
            right: { type: 'NumericLiteral', value: 10 },
          },
        },
      ],
    })
  })

  test('throws error when tokens are missing', () => {
    expect(() => parse(null)).toThrow(Error)
  })
})

