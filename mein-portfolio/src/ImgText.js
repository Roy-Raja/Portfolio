import React from 'react';
import './App.css';
import { ChakraBaseProvider, ChakraProvider, Text, Image, Link } from '@chakra-ui/react'

import { ExternalLinkIcon } from '@chakra-ui/icons'

function ImageWithText({ imagePath, text, titel, link }) {
  return (
    <ChakraProvider>
    <div className="image-with-text-container">
      <Image src={imagePath} alt="Bild" borderRadius='full'
  boxSize='150px' mr={"2%"} mt={"3%"}/>
      
      <div>
        <h2>{text}</h2>
        <p>{titel}</p>
        <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='3xl'
  fontWeight='extrabold'
  mt={"3%"}>Roy Raja</Text>
        <Text fontSize='2xl' color={"whiteAlpha.900"}>Junior Webdeveloper</Text>
        
        <Link href={link} color={"whiteAlpha.900"} isExternal >
  Github <ExternalLinkIcon mx='2px' />
</Link>
        </div>    
    </div>
    </ChakraProvider>
  );
}

export default ImageWithText;
