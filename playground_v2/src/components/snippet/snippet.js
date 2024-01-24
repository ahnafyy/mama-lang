import React from 'react'
import { Box, Heading, Button } from '@chakra-ui/react'
import AceEditor from 'react-ace'
import { FaCopy } from 'react-icons/fa' // Import the Copy icon

//import 'ace-builds/src-noconflict/mode-javascript';
import './../../syntax/mama-language'
import 'ace-builds/src-noconflict/theme-monokai'

const CodeSnippet = ({ title, code }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code)
  }

  return (
    <Box borderWidth="1px" borderRadius="md" p="4" mb="4">
      <Heading as="h3" fontSize="lg" mb="2">
        {title}
      </Heading>
      <AceEditor
        mode="javascript"
        theme="monokai"
        value={code}
        readOnly={true}
        wrapEnabled={true}
        height="200px"
      />
      <Button size="sm" mt="2" onClick={copyToClipboard} leftIcon={<FaCopy />}>
        Copy Code
      </Button>
    </Box>
  )
}

export default CodeSnippet
