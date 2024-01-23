import React, { useState } from 'react'
import { Box, Heading, Text, Flex, Link, Center, Icon, Button } from '@chakra-ui/react'
import { FaGithub, FaCopy } from 'react-icons/fa'

const MamaLangHeader = () => {
  const npmInstallCommand = 'npm install -g mama-lang'
  const [isCopied, setIsCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(npmInstallCommand)
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <Box bg="teal.500" color="white" p="4" textAlign="center">
      <Center>
        <Box>
          <Heading as="h1" fontSize="3xl">
            Mama Lang
          </Heading>
          <Text>A playful Bangla programming language </Text>
        </Box>
      </Center>
      <Center mt="4">
        <Flex alignItems="center">
          <Box
            borderWidth="1px"
            borderRadius="md"
            p="2"
            display="inline-block"
            transition="background-color 0.3s"
            _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <Box display="flex" alignItems="center">
              <Text>{npmInstallCommand}</Text>
              <Button
                size="sm"
                ml="2"
                onClick={copyToClipboard}
                backgroundColor="transparent"
                color="white"
                _hover={{ backgroundColor: 'transparent' }}
              >
                {isCopied ? 'Copied!' : <Icon as={FaCopy} />}
              </Button>
            </Box>
          </Box>
        </Flex>
      </Center>
      <Center mt="2">
        <Box
          borderWidth="1px"
          borderRadius="md"
          p="2"
          display="inline-block"
          transition="background-color 0.3s"
          _hover={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <Link
            href="https://github.com/ahnafyy/mama-lang"
            target="_blank"
            display="flex"
            alignItems="center"
          >
            <Text>View Source</Text>
            <Icon as={FaGithub} boxSize={5} ml="2" />
          </Link>
        </Box>
      </Center>
    </Box>
  )
}

export default MamaLangHeader
