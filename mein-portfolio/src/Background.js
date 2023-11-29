import "./styles.css";
import { useState, Suspense } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Scene } from "./Scene";
import { transition } from "./settings";

export default function Background() {
  const [isFullscreen, setFullscreen] = useState(false);

  return (
    <MotionConfig transition={transition}>
      <div
        data-is-fullscreen={isFullscreen}
        onClick={() => setFullscreen(!isFullscreen)}
      >
        <motion.h1 layout children="<LayoutCamera />" />
        <motion.div className="container" layout>
          <Suspense fallback={null}>
            <Scene isFullscreen={isFullscreen} />
          </Suspense>
        </motion.div>
      </div>
    </MotionConfig>
  );
}
