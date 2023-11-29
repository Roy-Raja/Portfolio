import React from 'react';
import './App.css';
import { ChakraBaseProvider, ChakraProvider, Container, Text, Wrap, WrapItem } from '@chakra-ui/react'

function About() {
  return (
    <ChakraProvider>
        <Container maxW='md' mt={"2%"}>
    <div className='about' >
      <Text fontSize='2xl' color={"whiteAlpha.900"}>Über mich</Text>
      <Text fontSize='lg' color={"whiteAlpha.900"}> In love with React & Next</Text>
    </div>
    </Container>
    </ChakraProvider>
  );
}

export default About;
