import React from 'react';
import './App.css';
import { ChakraBaseProvider, ChakraProvider, Text, Image, Link, Avatar, AvatarBadge, AvatarGroup, Wrap, WrapItem, Center, Container } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { motion } from 'framer-motion';
import imageSrc from './profilbild.jpg';

function ImageWithText({ imagePath, text, titel, link }) {
  return (
    <ChakraProvider>
  
  <Wrap>
  <WrapItem>
  <Center mt={"3%"} alignItems={"flex-end"}  maxW='md'>
  <motion.div className="image-with-text-container"   whileHover={{ scale: [null, 1.5, 1.4] }}
      transition={{ duration: 0.8 }}>
    <Avatar size='2xl' name='Dan Abrahmov' src={imageSrc} borderRadius='full' />
    </motion.div>
  </Center>
  </WrapItem>
  </Wrap>
  
        <h2>{text}</h2>
        <p>{titel}</p>
        <Text bgGradient='linear(to-l, #7928CA, #FF0080)'
  bgClip='text'
  fontSize='3xl'
  fontWeight='extrabold'
  mt={"3%"}>Roy Raja</Text>
        <Text fontSize='2xl' color={"whiteAlpha.900"}>Junior Webdeveloper</Text>
        
        <Link href="https://github.com/Roy-Raja" color={"whiteAlpha.900"} isExternal >
  Github <ExternalLinkIcon mx='2px' />
</Link>
            
   
    </ChakraProvider>
  );
}

export default ImageWithText;
