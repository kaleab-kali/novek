"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars, Float } from "@react-three/drei"
import { Suspense } from "react"

function SpaceObjects() {
  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial color="#3b82f6" emissive="#1e40af" emissiveIntensity={0.2} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[3, 2, -2]}>
          <torusGeometry args={[0.5, 0.2, 16, 100]} />
          <meshStandardMaterial color="#f59e0b" emissive="#d97706" emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </>
  )
}

export default function SpaceScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <SpaceObjects />
          <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        </Suspense>
      </Canvas>
    </div>
  )
}
