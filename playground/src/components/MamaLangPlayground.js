import React, { useState, useEffect } from 'react';
import { VStack, Button, Text, Box, Input, useToast } from '@chakra-ui/react';
import MonacoEditor from 'react-monaco-editor';
import { motion } from 'framer-motion';

const MamaPlayground = () => {
  const [code, setCode] = useState('// Default Hello, World! code\nbol toh mama("Hello, World!");');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);

  const toast = useToast();

  useEffect(() => {
    // Run the default code on component mount
    runCode();
  }, []); // Empty dependency array ensures this effect runs only once

  const runCode = () => {
    setIsRunning(true);
    setOutput('');

    try {
      const translatedCode = convertToJS(code);
      const result = executeCode(translatedCode);
      setOutput(result);
    } catch (error) {
      setOutput(`Error: ${error.message}\n${error.stack}`);
      toast({
        title: 'Error',
        description: 'An error occurred while running the code.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsRunning(false);
    }
  };

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
          // ... other keywords as needed (Mama tui jodi aida aro kisu add korte chas mama, akta PR open kor mama!)
          'mama kam da hoilo': 'function', // Function declaration
          'de toh mama': 'return', // Return statement'por por mama': '++', // Increment
          'kome kome mama': '--', // Decrement
          'chesta kor mama': 'try', // Try block
          'catch mama': 'catch', // Catch block for exceptions
      //    'mama file ta khol': 'fs.openSync', // File open (Assuming Node.js with 'fs' module)
        //  'mama file e likh': 'fs.writeFileSync', // Write to file
       //   'mama file por': 'fs.readFileSync', // Read from file
          'khoj mama': 'search', // Search or find operation
    };

    Object.entries(translations).forEach(([keyword, translation]) => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      sourceCode = sourceCode.replace(regex, translation);
    });

    return sourceCode;
  };

  const executeCode = (sourceCode) => {
    const runCodeFunction = new Function(sourceCode);
    const consoleLogMessages = [];

    const localConsole = {
      log: (message) => {
        consoleLogMessages.push(message);
      },
      warn: console.warn,
      error: console.error,
    };

    const originalConsole = { ...console };
    Object.assign(console, localConsole);

    try {
      runCodeFunction();
    } finally {
      Object.assign(console, originalConsole);
    }

    return consoleLogMessages.join('\n');
  };

  const handleEditorDidMount = (editor, monaco) => {
    monaco.languages.registerCompletionItemProvider('javascript', {
      provideCompletionItems: () => {
        return {
          suggestions: [
            { label: 'console', kind: monaco.languages.CompletionItemKind.Module, insertText: 'console' },
            { label: 'log', kind: monaco.languages.CompletionItemKind.Function, insertText: 'log' },
            // Add more suggestions as needed
          ],
        };
      },
    });
  };

  return (
    <VStack align="stretch" spacing={4} p={4} maxW="800px" m="auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Text fontSize="xl" fontWeight="bold">
          Mama Playground 🚀
        </Text>
      </motion.div>
      <Box>
        <MonacoEditor
          width="100%"
          height="300"
          language="javascript"
          theme="vs-dark"
          value={code}
          options={{
            wordWrap: 'bounded',
            automaticLayout: true,
          }}
          onChange={setCode}
          editorDidMount={handleEditorDidMount}
        />
      </Box>
      <Button colorScheme="teal" onClick={runCode} isLoading={isRunning}>
        Run
      </Button>
      <Text fontSize="lg" fontWeight="bold">
        Result:
      </Text>
      <Box p={4} borderWidth="1px" borderRadius="md" overflowX="auto">
        <Text whiteSpace="pre-line">{output}</Text>
      </Box>
    </VStack>
  );
};

export default MamaPlayground;