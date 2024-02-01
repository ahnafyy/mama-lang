const translations = {
  'mama aida hoilo': 'let', // Variable declaration
  'bol toh mama': 'console.log', // Print to console
  'kisuina mama': 'null', // Null value
  'haw mama': 'true', // Boolean true value
  'nah mama': 'false', // Boolean false value
  'jodi mama': 'if', // If condition
  'nah hoile mama': 'else if', // Else if condition
  'akdom e nah hoile': 'else', // Else condition
  'jotokhon porjonto mama': 'while', // While loop
  'thamis mama': 'break', // Break statement
  'tarpor er tah dekh': 'continue', // Continue statement
  'mama kam da hoilo': 'function', // Function declaration
  'de toh mama': 'return', // Return statement
  'por por mama': '++', // Increment
  'kome kome mama': '--', // Decrement
  'chesta kor mama': 'try', // Try block
  'catch mama': 'catch', // Catch block for exceptions
  'khoj mama': 'search', // Search or find operation
  // ... other keywords as needed
}
const TokenType = {
  KEYWORD: 'KEYWORD',
  IDENTIFIER: 'IDENTIFIER',
  NUMBER: 'NUMBER',
  STRING: 'STRING',
  OPERATOR: 'OPERATOR',
  PUNCTUATION: 'PUNCTUATION',
  COMMENT: 'COMMENT',
  WHITESPACE: 'WHITESPACE',
  NEWLINE: 'NEWLINE',
  INDENT: 'INDENT',
  DEDENT: 'DEDENT',
  EOF: 'EOF',
  // TO-DO: Figure out what to do with unknown tokens
  UNKNOWN: 'UNKNOWN',
  // TO-DO: We need to add functions and objects and call backs and all that jazz but for now lets just get the basics down
  FUNCTION_DECLARATION: 'FUNCTION_DECLARATION',
  RETURN_STATEMENT: 'RETURN_STATEMENT',
}
const keywords = new Map([
  ['mama aida hoilo', TokenType.KEYWORD], // Variable declaration
  ['kisuina mama', TokenType.KEYWORD], // Null value
  ['haw mama', TokenType.KEYWORD], // Boolean true value
  ['nah mama', TokenType.KEYWORD], // Boolean false value
  ['bol toh mama', TokenType.KEYWORD], // Print to console
  ['jodi mama', TokenType.KEYWORD], // If condition
  ['nah hoile mama', TokenType.KEYWORD], // Else if condition
  ['akdom e nah hoile', TokenType.KEYWORD], // Else condition
  ['jotokhon porjonto mama', TokenType.KEYWORD], // While loop
  ['thamis mama', TokenType.KEYWORD], // Break statement
  ['tarpor er tah dekh', TokenType.KEYWORD], // Continue statement
  ['mama kam da hoilo', TokenType.KEYWORD], // Function declaration
  ['de toh mama', TokenType.KEYWORD], // Return statement
  ['por por mama', TokenType.KEYWORD], // Increment
  ['kome kome mama', TokenType.KEYWORD], // Decrement
  ['chesta kor mama', TokenType.KEYWORD], // Try block
  ['catch mama', TokenType.KEYWORD], // Catch block for exceptions
  ['mama file ta khol', TokenType.KEYWORD], // File open
  ['mama file e likh', TokenType.KEYWORD], // Write to file
  ['mama file por', TokenType.KEYWORD], // Read from file
  ['mama shuru kor', TokenType.KEYWORD], // Start of a program or block
  ['mama shesh kor', TokenType.KEYWORD], // End of a program or block
  ['khoj mama', TokenType.KEYWORD], // Search or find operation
  ['mama eshe gechi', TokenType.KEYWORD], // Function or method entrance
  ['mama phire jao', TokenType.KEYWORD], // Function or method exit
  // ... other keywords as needed (Mama tui jodi aida aro kisu add korte chas mama, akta PR open kor mama!)
])
module.exports = {
  translations,
  keywords,
  TokenType,
}
