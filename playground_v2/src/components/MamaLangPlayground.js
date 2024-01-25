import React, { useState, useEffect } from 'react'
import { VStack, Button, Text, Box, useToast } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import AceEditor from 'react-ace'
import { convertToJS, executeCode } from '../lib/mamaLanguage'
import 'ace-builds/src-noconflict/theme-monokai'
import './../syntax/mama-language'

const MamaPlayground = () => {
  const [code, setCode] = useState('// Default Hello, World! code\nbol toh mama("Hello, World!");')
  const [output, setOutput] = useState('')
  const [isRunning, setIsRunning] = useState(false)

  const toast = useToast()

  useEffect(() => {
    // Run the default code on component mount
    runCode()
  }, []) // Empty dependency array ensures this effect runs only once

  const runCode = () => {
    setIsRunning(true)
    setOutput('')

    try {
      const translatedCode = convertToJS(code)
      const result = executeCode(translatedCode)
      setOutput(result)
    } catch (error) {
      setOutput(`Error: ${error.message}\n${error.stack}`)
      toast({
        title: 'Error',
        description: 'An error occurred while running the code.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
    } finally {
      setIsRunning(false)
    }
  }

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
        <AceEditor
          mode="mama" // Use the custom Ace mode
          theme="monokai"
          width="100%"
          height="300px"
          value={code}
          onChange={setCode}
          editorProps={{ $blockScrolling: true }}
          padding={15}
          fontSize={16}
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
  )
}
export default MamaPlayground
