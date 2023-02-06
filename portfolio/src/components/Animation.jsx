import React from "react";

// import { Suspense } from "react";
// import { OrbitControls } from "@react-three/drei";
// import { Canvas, useLoader } from "@react-three/fiber";
// import { GFTLoader } from "three/examples/jsm/loaders/GFTLoader";

// function Scene() {
//   const gltf = useLoader(GLTFLoader, "/dog.glb");
//   return (
//     <Suspense fallback={null}>
//       <primitive scale={0.5} object={gltf.scene} />
//     </Suspense>
//   );
// }

function Animation() {
  return (
    <div className="w-[100%] h-[450px]">
      {/* <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Scene />
      </Canvas> */}
    </div>
  );
}
export default Animation;
