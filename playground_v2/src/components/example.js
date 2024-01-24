// CodeExample.js
import React from 'react'
import { ChakraProvider, extendTheme, Flex, Center, Heading } from '@chakra-ui/react'
import CodeSnippet from './snippet/snippet'

// Import Ace editor styles
import 'ace-builds/src-noconflict/theme-monokai'
//import 'ace-builds/src-noconflict/mode-javascript';
import './../syntax/mama-language'

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'body',
      },
    },
  },
})

const CodeExample = () => {
  const snippets = [
    {
      title: 'Function',
      code: `mama kam da hoilo multiply(x, y) {
  de toh mama (x * y);
}

mama aida hoilo result = multiply(3, 4);
bol toh mama("The result is: " + result);`,
    },
    {
      title: 'conditional statement',
      code: `mama aida hoilo temperature = 50;

jodi mama (temperature > 30) {
  bol toh mama ("Gorom lagtese mama, AC chalao mama!");
} nah hoile mama (temperature < 20) {
  bol toh mama ("Thanda lagtese mama, sweater porum mama!");
} akdom e nah hoile {
  bol toh mama ("Aajke weather besh comfortable, mama!");
}`,
    },
    {
      title: 'Loop',
      code: `mama aida hoilo start = 1;
 mama aida hoilo end = 5;
 
 jotokhon porjonto mama (start <= end) {
   bol toh mama("Current value is: " + start);
   start += 1;
 }
 `,
    },
    // Add more code snippets as needed
  ]

  return (
    <ChakraProvider theme={theme}>
      <Center minH="100vh">
        <Flex
          direction="column"
          align="center"
          maxW={['sm', 'md', 'lg']}
          p={['2', '4']}
          borderWidth="1px"
          borderRadius="md"
        >
          <Heading as="h1" fontSize={['xl', '2xl', '3xl']} mb="2">
            Code Examples
          </Heading>
          {snippets.map((snippet, index) => (
            <CodeSnippet key={index} title={snippet.title} code={snippet.code} />
          ))}
        </Flex>
      </Center>
    </ChakraProvider>
  )
}

export default CodeExample
