#!/usr/bin/env node
const fs = require('fs');

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
    // ... other keywords as needed (Mama tui jodi aida aro kisu add korte chas mama, akta PR open kor mama!)
    'mama kam da hoilo': 'function', // Function declaration
    'de toh mama' : 'return' // Return statement
  };

const createKeywordsRegex = () => {
  const keywords = Object.keys(translations).map(keyword =>
    keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const pattern = `^(?:${keywords.join('|')})$`;
  return new RegExp(pattern);
};


const translateKeywordToJS = (keyword) => {
  return translations[keyword] || keyword;
};

const convertToJS = (sourceCode) => {
  Object.keys(translations).forEach(keyword => {
    // Use a regex to match whole words only to prevent partial replacements
    const regex = new RegExp(`\\b${keyword}\\b`, 'g');
    sourceCode = sourceCode.replace(regex, translations[keyword]);
  });
  return sourceCode;
};

const runMamaLang = (filename) => {
    // Check if the filename is valid
  if (!filename || filename.startsWith('--')) {
    console.error('Mama filer name tah teh ektu dekh mama! Na likhe thakle kisu toh likh mama!');
    return;
  }
  const sourceCode = fs.readFileSync(filename, 'utf8');
  const jsCode = convertToJS(sourceCode, translations);

  eval(jsCode);
};

const filename = process.argv[2];
runMamaLang(filename);

module.exports = {
  createKeywordsRegex,
  translateKeywordToJS,
  convertToJS,
  runMamaLang
};
