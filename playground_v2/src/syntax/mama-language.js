// mama-language.js
import ace from 'ace-builds/src-noconflict/ace'
import 'ace-builds/src-noconflict/mode-javascript'

ace.define('ace/mode/mama', (require, exports, module) => {
  const oop = require('ace/lib/oop')
  const TextMode = require('ace/mode/text').Mode

  const HighlightRules = require('./mama-language-highlight-rules').MamaHighlightRules

  const Mode = function () {
    this.HighlightRules = HighlightRules
  }
  oop.inherits(Mode, TextMode)

  exports.Mode = Mode
})

ace.define('ace/mode/mama-language-highlight-rules', (require, exports, module) => {
  const oop = require('ace/lib/oop')
  const TextHighlightRules = require('ace/mode/text_highlight_rules').TextHighlightRules

  const MamaHighlightRules = function () {
    this.$rules = {
      start: [
        {
          token: 'variable',
          regex: '\\b(mama aida hoilo)\\b',
        },
        {
          token: 'support.function',
          regex: '\\b(bol toh mama)\\b',
        },
        {
          token: 'constant.language.boolean',
          regex: '\\b(haw mama|nah mama)\\b',
        },
        {
          token: 'keyword.control',
          regex: '\\b(jodi mama|nah hoile mama|akdom e nah hoile|jotokhon porjonto mama)\\b',
        },
        {
          token: 'keyword.operator',
          regex: '\\b(thamis mama|tarpor er tah dekh|kome kome mama)\\b',
        },
        {
          token: 'storage.type',
          regex: '\\b(mama kam da hoilo)\\b',
        },
        {
          token: 'keyword',
          regex: '\\b(de toh mama)\\b',
        },
        {
          token: 'keyword.control',
          regex: '\\b(chesta kor mama|catch mama)\\b',
        },
        {
          token: 'keyword.operator',
          regex: '\\b(khoj mama)\\b',
        },
        {
          token: 'string',
          regex: '".*?"',
        },
        {
          token: 'constant.numeric',
          regex: '\\b\\d+\\b',
        },
        // Add more rules for other elements
      ],
    }
  }

  oop.inherits(MamaHighlightRules, TextHighlightRules)

  exports.MamaHighlightRules = MamaHighlightRules
})
