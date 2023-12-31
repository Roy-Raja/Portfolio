import React from "react";
import "./App.css";
import {
  ChakraBaseProvider,
  ChakraProvider,
  Text,
  Image,
  Link,
  Avatar,
  AvatarBadge,
  AvatarGroup,
  Wrap,
  WrapItem,
  Center,
  Container,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { SiLinkedin, SiGithub } from "react-icons/si";

import { motion } from "framer-motion";
import imageSrc from "./profilbild.jpg";

function ImageWithText({ imagePath, text, titel, link }) {
  return (
    <ChakraProvider>
      <Card maxW="sm" bg="rgba(255, 255, 255, 0.5)">
        <CardBody>
          <motion.div
            className="image-with-text-container"
            whileHover={{ scale: [null, 0.5, 1.0] }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={imageSrc}
              alt="Green double couch with wooden legs"
              borderRadius="lg"
            />
          </motion.div>

          <Stack>
            <Heading size="md">{text}</Heading>
            <Text
              bgGradient="linear(to-l, #7928CA, #FF0080)"
              bgClip="text"
              fontSize="3xl"
              fontWeight="extrabold"
              mt={"3%"}
            >
              Roy Raja
            </Text>
            <Text fontSize="2xl" color={"blackAlpha.900"}>
              Junior Webdeveloper
            </Text>

            <Stack
              width={"100%"}
              direction={"row"}
              padding={2}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                as="a" // Verwende "as" prop, um den Button als Link zu behandeln
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                leftIcon={<SiGithub />}
                href="https://github.com/Roy-Raja" // GitHub-URL hier einfügen
                target="_blank"
                rel="noopener noreferrer"
              ></Button>

              <Button
                as="a" // Verwende "as" prop, um den Button als Link zu behandeln
                flex={1}
                fontSize={"sm"}
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                leftIcon={<SiLinkedin />}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bg: "blue.500",
                }}
                _focus={{
                  bg: "blue.500",
                }}
                href={"https://www.linkedin.com/in/roy-raja-59920926b"} // LinkedIn-URL hier einfügen
                target="_blank"
                rel="noopener noreferrer"
              ></Button>
            </Stack>
          </Stack>
        </CardBody>
      </Card>
      {/* <h2>{text}</h2>
      <p>{titel}</p>
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="3xl"
        fontWeight="extrabold"
        mt={"3%"}
      >
        Roy Raja
      </Text>
      <Text fontSize="2xl" color={"whiteAlpha.900"}>
        Junior Webdeveloper
      </Text>

      <Link
        href="https://github.com/Roy-Raja"
        color={"whiteAlpha.900"}
        isExternal
      >
        Github 
      </Link> */}
    </ChakraProvider>
  );
}

export default ImageWithText;
