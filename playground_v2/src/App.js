import MamaPlayground from './components/MamaLangPlayground'
import MamaLangHeader from './components/header'
import { ChakraProvider } from '@chakra-ui/react'
import ExampleCodeContainer from './components/example'
const App = () => {
  return (
    <div>
      <ChakraProvider>
        <MamaLangHeader />
        <MamaPlayground />
      </ChakraProvider>
      <ExampleCodeContainer />
    </div>
  )
}

export default App
