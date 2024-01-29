import translations from './mamaTranslations'

const convertToJS = (sourceCode) => {
  Object.entries(translations).forEach(([keyword, translation]) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g')
    sourceCode = sourceCode.replace(regex, translation)
  })

  return sourceCode
}

const executeCode = (sourceCode) => {
  // eslint-disable-next-line no-new-func
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

export { translations, convertToJS, executeCode }
