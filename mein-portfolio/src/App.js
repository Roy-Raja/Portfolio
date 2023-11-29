import "./App.css";
import ImageWithText from "./ImgText";
import About from "./About";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

import {
  ChakraBaseProvider,
  ChakraProvider,
  Box,
  extendTheme,
  ColorModeScript,
  Text,
  Container,
} from "@chakra-ui/react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

function App() {
  return (
    <ChakraProvider>
      <Box bg="black" w="100vw" h="100vh">
        <Canvas camera={{ position: [0, 0, 2] }}>
          <OrbitControls></OrbitControls>
          <ambientLight position={[0, 20, 0]} intensity={1} />

          <Cube />
        </Canvas>
      </Box>
      <Box bg="black" w="100vw" h="100vh">
        <ImageWithText />
        <About />
      </Box>
    </ChakraProvider>
  );
}

function Cube() {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.1;
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

export default App;
