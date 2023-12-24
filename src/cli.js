#!/usr/bin/env node
const fs = require('fs');

/**
 * The function creates a regular expression pattern that matches any of the keywords provided in the
 * translations object.
 * @param translations - The `translations` parameter is an object that contains keywords as keys and
 * their corresponding translations as values.
 * @returns a regular expression object.
 */
const createKeywordsRegex = (translations) => {
  const keywords = Object.keys(translations).map(keyword =>
    keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  );
  const pattern = `\\b(?:${keywords.join('|')})\\b`;
  return new RegExp(pattern, 'g');
};

/**
 * The function translates a given keyword to its JavaScript equivalent.
 * @param keyword - The `keyword` parameter is a string that represents a keyword that needs to be
 * translated to JavaScript.
 * @returns The translation of the keyword to JavaScript, if it exists in the translations object. If
 * the keyword does not have a translation, the original keyword is returned.
 */
const translateKeywordToJS = (keyword) => {
  return translations[keyword] || keyword;
};

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
    'tarpor er tah dekh': 'continue' // Continue statement
    // ... other keywords as needed (Mama tui jodi aida aro kisu add korte chas mama, akta PR open kor mama!)
};

/**
 * The `tokenize` function takes in source code as input and uses regular expressions to match keywords
 * and other tokens, returning an array of tokens with their corresponding values.
 * @param sourceCode - The `sourceCode` parameter is a string that represents the code that you want to
 * tokenize. It can be any valid code written in a programming language.
 * @returns The function `tokenize` returns an array of objects. Each object in the array represents a
 * token found in the `sourceCode`. The `value` property of each object contains the actual token
 * value.
 */
const tokenize = (sourceCode) => {
  // Regular expression to match keywords and other tokens
  const regex = createKeywordsRegex(translations);
  return sourceCode.match(regex).map(token => ({ value: token }));
};

/**
 * The function `convertToJS` takes in source code as input, tokenizes it, translates keywords to
 * JavaScript, and returns the resulting JavaScript code as a string.
 * @param sourceCode - The `sourceCode` parameter is a string that represents the code that needs to be
 * converted to JavaScript.
 * @returns The function `convertToJS` returns a string that is the result of joining the translated
 * tokens with a space character.
 */
const convertToJS = (sourceCode) => {
  const tokens = tokenize(sourceCode);
  return tokens.map(token => translateKeywordToJS(token.value)).join(' ');
};

/**
 * The function `runMamaLang` reads a file containing source code written in MamaLang, converts it to
 * JavaScript, and then executes the converted JavaScript code.
 * @param filename - The `filename` parameter is a string that represents the name or path of the file
 * containing the source code written in MamaLang.
 */
const runMamaLang = (filename) => {
  const sourceCode = fs.readFileSync(filename, 'utf8');
  const jsCode = convertToJS(sourceCode);

  console.log('Generated JavaScript code:');
  console.log(jsCode);

  // eval(jsCode); // Execute the converted JavaScript code
};

const filename = process.argv[2];
runMamaLang(filename);

module.exports = {
    tokenize,
    createKeywordsRegex,
    convertToJS,
    runMamaLang
};