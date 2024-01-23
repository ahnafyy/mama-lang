import MamaPlayground from './components/MamaLangPlayground'
import { ChakraProvider } from '@chakra-ui/react'
const App = () => {
  return (
    <ChakraProvider>
      <MamaPlayground />
    </ChakraProvider>
  )
}

export default App
