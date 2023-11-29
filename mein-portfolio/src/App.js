import "./App.css";
import ImageWithText from './ImgText';
import About from "./About"


import { ChakraBaseProvider, ChakraProvider, Box, extendTheme, ColorModeScript, Text } from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon } from '@chakra-ui/icons'
import Background from "./Background";



function App() {
  return (
    
    <ChakraProvider >

    <Background />
 
      <ImageWithText/> 
        <About />
      
         
    
    
    </ChakraProvider>
    
  );
}



export default App;
