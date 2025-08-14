// Basic parser for Mama Lang v2.
// Ekhane amra Mama Lang er token gula ke AST te rupantor korbo mama.

const { TokenType } = require('../lexer')

class Parser {
  constructor(tokens) {
    this.tokens = tokens
    this.position = 0
  }

  peek() {
    return this.tokens[this.position]
  }

  consume() {
    return this.tokens[this.position++]
  }

  expect(type, value) {
    const token = this.consume()
    if (!token || token.type !== type || (value && token.value !== value)) {
      throw new Error(
        `Mama expected ${value || type} kintu paisi ${token ? token.value : 'kisu na'} mama`,
      )
    }
    return token
  }

  parseProgram() {
    const body = []
    while (this.position < this.tokens.length) {
      body.push(this.parseStatement())
    }
    return { type: 'Program', body }
  }

  parseStatement() {
    const token = this.peek()
    if (token.type === TokenType.KEYWORD && token.value === 'mama aida hoilo') {
      return this.parseVariableDeclaration()
    }
    throw new Error(`Mama bujlam na ${token.value} diye ki korte chas mama`)
  }

  parseVariableDeclaration() {
    this.consume() // 'mama aida hoilo'
    const identifier = this.expect(TokenType.IDENTIFIER)
    this.expect(TokenType.OPERATOR, '=')
    const value = this.parseExpression()
    return {
      type: 'VariableDeclaration',
      identifier: identifier.value,
      value,
    }
  }

  parseExpression() {
    return this.parseBinaryExpression()
  }

  parseBinaryExpression() {
    let left = this.parsePrimary()

    while (true) {
      const token = this.peek()
      if (token && token.type === TokenType.OPERATOR && ['+', '-', '*', '/'].includes(token.value)) {
        const operator = this.consume().value
        const right = this.parsePrimary()
        left = { type: 'BinaryExpression', operator, left, right }
      } else {
        break
      }
    }

    return left
  }

  parsePrimary() {
    const token = this.consume()
    if (!token) throw new Error('Mama aro token chilo na mama')

    switch (token.type) {
      case TokenType.NUMBER:
        return { type: 'NumericLiteral', value: Number(token.value) }
      case TokenType.STRING:
        return { type: 'StringLiteral', value: token.value.slice(1, -1) }
      case TokenType.IDENTIFIER:
        return { type: 'Identifier', name: token.value }
      case TokenType.KEYWORD:
        if (token.value === 'haw mama') return { type: 'BooleanLiteral', value: true }
        if (token.value === 'nah mama') return { type: 'BooleanLiteral', value: false }
        if (token.value === 'kisuina mama') return { type: 'NullLiteral', value: null }
        break
      case TokenType.PUNCTUATION:
        if (token.value === '(') {
          const expr = this.parseExpression()
          this.expect(TokenType.PUNCTUATION, ')')
          return expr
        }
    }

    throw new Error(`Mama token ${token.value} amra parse korte parlam na mama`)
  }
}

const parse = (tokens) => {
  if (!Array.isArray(tokens)) {
    throw new Error('Mama tokens array lagbe mama')
  }
  const parser = new Parser(tokens)
  return parser.parseProgram()
}

module.exports = { parse }

