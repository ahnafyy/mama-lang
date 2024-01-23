import MamaPlayground from './components/MamaLangPlayground'
import MamaLangHeader from './components/header'
import { ChakraProvider } from '@chakra-ui/react'
const App = () => {
  return (
    <div>
      <ChakraProvider>
        <MamaLangHeader />
        <MamaPlayground />
      </ChakraProvider>
    </div>
  )
}

export default App
