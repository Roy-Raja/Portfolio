import ImageWithText from "./ImgText";
import About from "./About";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box bg="black" w="100vw" h="100vh">
        <Canvas camera={{ position: [0, 0, 5] }}>
          {/* <OrbitControls /> */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Cube position={[-2, 0, 0]} />
          <Cube position={[0, 0, 0]} />
          <Cube position={[2, 0, 0]} />
          <Stars />
        </Canvas>
        <div
          style={{ position: "absolute", top: 100, left: 300, width: "100%" }}
        >
          <ImageWithText />
        </div>
      </Box>

      <Box bg="black" w="100vw" h="100vh">
        <div
          style={{ position: "relative", top: 100, left: 300, width: "100%" }}
        >
          <About />
        </div>
      </Box>
    </ChakraProvider>
  );
}

function Cube({ position }) {
  const mesh = useRef();

  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.5;
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"blue"} />
    </mesh>
  );
}

function Stars() {
  const stars = useRef();

  useFrame(({ clock }) => {
    // Bewege die Sterne leicht, um einen Eindruck von Bewegung zu erzeugen
    stars.current.rotation.x = clock.getElapsedTime() * 0.05;
    stars.current.rotation.y = clock.getElapsedTime() * 0.025;
  });

  // Erzeuge eine Gruppe von Sternen
  const starsArray = new Array(500).fill();

  return (
    <group ref={stars}>
      {starsArray.map((_, index) => (
        <Star key={index} />
      ))}
    </group>
  );
}

function Star() {
  const star = useRef();

  useFrame(() => {
    // Bewege jeden Stern leicht, um einen Eindruck von Bewegung zu erzeugen
    star.current.rotation.x += 0.0001;
    star.current.rotation.y += 0.0001;
  });

  return (
    <mesh
      ref={star}
      position={[
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
        Math.random() * 100 - 50,
      ]}
    >
      <sphereGeometry args={[0.1, 8, 8]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}

export default App;
