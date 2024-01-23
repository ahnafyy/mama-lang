const fs = require('fs')
const { createKeywordsRegex, convertToJS, runMamaLang, translateKeywordToJS } = require('./cli')

describe('MamaLang Translator', () => {
  it('should create a regex pattern that matches keywords', () => {
    const regex = createKeywordsRegex()
    expect(regex.test('mama aida hoilo')).toBe(true)
    expect(regex.test('bol toh mama')).toBe(true)
    expect(regex.test('blah blah')).toBe(false)
  })

  it('should translate a MamaLang keyword to JavaScript', () => {
    expect(translateKeywordToJS('mama aida hoilo')).toBe('let')
    expect(translateKeywordToJS('bol toh mama')).toBe('console.log')
    expect(translateKeywordToJS('kisuina mama')).toBe('null')
    expect(translateKeywordToJS('nonexistent')).toBe('nonexistent')
  })

  it('should convert MamaLang code to JavaScript', () => {
    const sourceCode = 'mama aida hoilo a = 5; bol toh mama(a);'
    const jsCode = convertToJS(sourceCode)
    expect(jsCode).toBe('let a = 5; console.log(a);')
  })

  it('should execute MamaLang code from a file', () => {
    const testFileName = 'test-mama-code.mama' // Path to the test file
    const testCode = 'mama aida hoilo a = 5; bol toh mama(a);'
    const expectedJsCode = 'let a = 5; console.log(a);' // Expected JavaScript code

    // Write test code to the file
    fs.writeFileSync(testFileName, testCode, 'utf8')

    // Mock eval to verify execution
    const evalSpy = jest.spyOn(global, 'eval')

    // Run the function
    runMamaLang(testFileName)

    // Verify that eval was called with the correct JavaScript code
    expect(evalSpy).toHaveBeenCalledWith(expectedJsCode)

    // Clean up: remove the test file and restore eval
    fs.unlinkSync(testFileName)
    evalSpy.mockRestore()
  })

  it('should correctly translate complex MamaLang expressions', () => {
    const sourceCode =
      'mama aida hoilo x = 10; jodi mama (x > 5) { bol toh mama("x is greater than 5"); }'
    const jsCode = convertToJS(sourceCode)
    const expectedJsCode = 'let x = 10; if (x > 5) { console.log("x is greater than 5"); }'
    expect(jsCode).toBe(expectedJsCode)
  })

  it('should handle control flow structures in MamaLang', () => {
    const sourceCode =
      'jodi mama (condition) { bol toh mama("True"); } akdom e nah hoile { bol toh mama("False"); }'
    const jsCode = convertToJS(sourceCode)
    const expectedJsCode = 'if (condition) { console.log("True"); } else { console.log("False"); }'
    expect(jsCode).toBe(expectedJsCode)
  })

  it('should not translate keywords embedded in other words', () => {
    const sourceCode = 'text containingmama aida hoilo not a keyword'
    const jsCode = convertToJS(sourceCode)
    expect(jsCode).toBe('text containingmama aida hoilo not a keyword')
  })

  it('should correctly handle mixed content', () => {
    const sourceCode = 'This is a comment. mama aida hoilo x = 5; // This is another comment'
    const jsCode = convertToJS(sourceCode)
    const expectedJsCode = 'This is a comment. let x = 5; // This is another comment'
    expect(jsCode).toBe(expectedJsCode)
  })
})
