#!/usr/bin/env node
const fs = require('fs')
const { translations } = require('./lib/grammer')

const createKeywordsRegex = () => {
  const keywords = Object.keys(translations).map((keyword) =>
    keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
  )
  const pattern = `^(?:${keywords.join('|')})$`
  return new RegExp(pattern)
}

const translateKeywordToJS = (keyword) => {
  return translations[keyword] || keyword
}

const convertToJS = (sourceCode) => {
  Object.keys(translations).forEach((keyword) => {
    const regex = new RegExp(`\\b${keyword}\\b`, 'g')
    sourceCode = sourceCode.replace(regex, translations[keyword])
  })
  return sourceCode
}

const runMamaLang = (filename) => {
  if (!filename || filename.startsWith('--')) {
    console.error('Mama file er name tah teh ektu dekh mama! Na likhe thakle kisu toh likh mama!')
    return
  }

  try {
    const sourceCode = fs.readFileSync(filename, 'utf8')
    const jsCode = convertToJS(sourceCode)
    eval(jsCode)
  } catch (error) {
    console.error('Error executing MamaLang code:', error.message)
  }
}

const filename = process.argv[2]
runMamaLang(filename)

module.exports = {
  createKeywordsRegex,
  translateKeywordToJS,
  convertToJS,
  runMamaLang,
}
