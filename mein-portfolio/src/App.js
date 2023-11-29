import "./App.css";
import ImageWithText from './ImgText';
import About from "./About"
import imageSrc from './profilbild.jpg';
import { ChakraBaseProvider, ChakraProvider, Box, extendTheme, ColorModeScript, Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'

const theme = extendTheme({
  config: {
    initialColorMode: 'bg="black"', // Standardmäßig auf hellen Modus setzen
  },
});

function App() {
  return (
    
    <ChakraProvider theme={theme}>
      
    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {/* <Box bg="black" w="100vw" h="10vh" ></Box>
      <Box bg="black" w="100vw" h="100vh" > */}
      <Box bg="black" w="100vw" h="100vh">
    <div >
    
      <ImageWithText  imagePath={imageSrc} link="https://github.com/Roy-Raja" /> 
      
      <About />
      
         
    </div>
    </Box>
    </ChakraProvider>
    
  );
}



export default App;
