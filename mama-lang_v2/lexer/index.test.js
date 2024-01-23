const { tokenize, TokenType } = require('./index')

describe('Tokenizer', () => {
  test('Tokenizes variables and assignments', () => {
    const sourceCode = 'mama aida hoilo x = 5'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.KEYWORD, value: 'mama aida hoilo' },
      { type: TokenType.IDENTIFIER, value: 'x' },
      { type: TokenType.OPERATOR, value: '=' },
      { type: TokenType.NUMBER, value: '5' },
    ])
  })

  test('Tokenizes numeric values', () => {
    const sourceCode = '42'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([{ type: TokenType.NUMBER, value: '42' }])
  })

  test('Tokenizes string literals', () => {
    const sourceCode = '"hello mama" \'bari\''
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.STRING, value: '"hello mama"' },
      { type: TokenType.STRING, value: "'bari'" },
    ])
  })

  test('Tokenizes boolean values and null', () => {
    const sourceCode = 'haw mama nah mama kisuina mama'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.KEYWORD, value: 'haw mama' },
      { type: TokenType.KEYWORD, value: 'nah mama' },
      { type: TokenType.KEYWORD, value: 'kisuina mama' },
    ])
  })

  test('Tokenizes complex expressions', () => {
    const sourceCode = 'mama aida hoilo x = (5 + 10) * 2'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.KEYWORD, value: 'mama aida hoilo' },
      { type: TokenType.IDENTIFIER, value: 'x' },
      { type: TokenType.OPERATOR, value: '=' },
      { type: TokenType.PUNCTUATION, value: '(' },
      { type: TokenType.NUMBER, value: '5' },
      { type: TokenType.OPERATOR, value: '+' },
      { type: TokenType.NUMBER, value: '10' },
      { type: TokenType.PUNCTUATION, value: ')' },
      { type: TokenType.OPERATOR, value: '*' },
      { type: TokenType.NUMBER, value: '2' },
    ])
  })

  test('Tokenizes Function calls', () => {
    const sourceCode = 'mama kam da hoilo jog(a,b){ de toh mama (a+b)}'
    const tokens = tokenize(sourceCode)
    expect(tokens).toEqual([
      { type: TokenType.KEYWORD, value: 'mama kam da hoilo' },
      { type: TokenType.IDENTIFIER, value: 'jog' },
      { type: TokenType.PUNCTUATION, value: '(' },
      { type: TokenType.IDENTIFIER, value: 'a' },
      { type: TokenType.PUNCTUATION, value: ',' },
      { type: TokenType.IDENTIFIER, value: 'b' },
      { type: TokenType.PUNCTUATION, value: ')' },
      { type: TokenType.PUNCTUATION, value: '{' },
      { type: TokenType.KEYWORD, value: 'de toh mama' },
      { type: TokenType.PUNCTUATION, value: '(' },
      { type: TokenType.IDENTIFIER, value: 'a' },
      { type: TokenType.OPERATOR, value: '+' },
      { type: TokenType.IDENTIFIER, value: 'b' },
      { type: TokenType.PUNCTUATION, value: ')' },
      { type: TokenType.PUNCTUATION, value: '}' },
    ])
  })

  test('Throws error on invalid syntax', () => {
    const sourceCode = null
    expect(() => tokenize(sourceCode)).toThrow(Error)
  })
})
