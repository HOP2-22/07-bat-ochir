import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";

function Banner() {
  return (
    <div className="h-[350px] mt-[150px] w-full ">
      <Canvas camera={{ fov: 45, position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <Model position={[0, -1, 0]} />
          <OrbitControls autoRotate autoRotateSpeed={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default Banner;
