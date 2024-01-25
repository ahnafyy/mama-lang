const convertToJS = (sourceCode) => {
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
    'de toh mama': 'return', // Return statement'por por mama': '++', // Increment
    'kome kome mama': '--', // Decrement
    'chesta kor mama': 'try', // Try block
    'catch mama': 'catch', // Catch block for exceptions
    'khoj mama': 'search', // Search or find operation
    // ... other keywords as needed (Mama tui jodi aida aro kisu add korte chas mama, akta PR open kor mama!)
  }

  Object.entries(translations).forEach(([keyword, translation]) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g')
    sourceCode = sourceCode.replace(regex, translation)
  })

  return sourceCode
}

const executeCode = (sourceCode) => {
  const runCodeFunction = new Function(sourceCode)
  const consoleLogMessages = []

  const localConsole = {
    log: (message) => {
      consoleLogMessages.push(message)
    },
    warn: console.warn,
    error: console.error,
  }

  const originalConsole = { ...console }
  Object.assign(console, localConsole)

  try {
    runCodeFunction()
  } finally {
    Object.assign(console, originalConsole)
  }

  return consoleLogMessages.join('\n')
}

export { convertToJS, executeCode }
