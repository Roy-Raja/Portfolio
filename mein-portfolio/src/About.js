import React from "react";
import "./App.css";
import {
  ChakraBaseProvider,
  ChakraProvider,
  Container,
  Text,
  Wrap,
  WrapItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
} from "@chakra-ui/react";

function About() {
  return (
    <ChakraProvider>
      <Card maxW="sm" bg="rgba(255, 255, 255, 0.5)">
        <CardBody>
          <Stack>
            <div className="about">
              <Text fontSize="2xl" color={"blackAlpha.900"}>
                Über mich
              </Text>
              <Text fontSize="lg" color={"blackAlpha.900"}>
                In love with React & Next
              </Text>
            </div>
          </Stack>
        </CardBody>
      </Card>
      <Container maxW="md" mt={"2%"}></Container>
    </ChakraProvider>
  );
}

export default About;
