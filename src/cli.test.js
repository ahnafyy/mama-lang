const fs = require('fs');
const {
  tokenize,
  createKeywordsRegex,
  convertToJS,
  runMamaLang
} = require('./cli');

describe('MamaLang Translator', () => {
  describe('createKeywordsRegex', () => {
    it('should create a regex pattern that matches keywords', () => {
      const translations = {
        'mama aida hoilo': 'let',
        'bol toh mama': 'console.log'
      };
      const regex = createKeywordsRegex(translations);
      expect(regex.test('mama aida hoilo')).toBe(true);
      expect(regex.test('bol toh mama')).toBe(true);
      expect(regex.test('kisuina mama')).toBe(false);
    });
  });

  describe('translateKeywordToJS', () => {
    it('should translate a MamaLang keyword to JavaScript', () => {
      expect(translateKeywordToJS('mama aida hoilo')).toBe('let');
      expect(translateKeywordToJS('bol toh mama')).toBe('console.log');
      expect(translateKeywordToJS('kisuina mama')).toBe('null');
      expect(translateKeywordToJS('nonexistent')).toBe('nonexistent');
    });
  });

  describe('tokenize', () => {
    it('should tokenize MamaLang source code', () => {
      const sourceCode = 'mama aida hoilo bol toh mama';
      const tokens = tokenize(sourceCode);
      expect(tokens).toEqual([
        { value: 'mama aida hoilo' },
        { value: 'bol toh mama' }
      ]);
    });
  });

  describe('convertToJS', () => {
    it('should convert MamaLang code to JavaScript', () => {
      const sourceCode = 'mama aida hoilo bol toh mama';
      const jsCode = convertToJS(sourceCode);
      expect(jsCode).toBe('let console.log');
    });
  });

  describe('runMamaLang', () => {
    it('should execute MamaLang code from a file', () => {
      const testFileName = 'test-mama-code.mama'; // Create a test file with MamaLang code
      fs.writeFileSync(testFileName, 'mama aida hoilo bol toh mama', 'utf8');

      const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
      runMamaLang(testFileName);

      expect(spy).toHaveBeenCalledWith('let console.log');

      fs.unlinkSync(testFileName); // Clean up the test file
      spy.mockRestore();
    });
  });
});
