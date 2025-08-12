"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment } from "@react-three/drei"
import { Suspense } from "react"

interface Logo3DModelProps {
  url?: string
}

function Logo3DModel({ url = "/assets/3d/novek-logo.glb" }: Logo3DModelProps) {
  // This will load your GLB file when you provide it
  // For now, we'll create a fallback 3D representation of your logo
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <group scale={[2, 2, 2]}>
        {/* Main circular base - representing the circular part of your logo */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[1.5, 1.5, 0.2, 32]} />
          <meshStandardMaterial
            color="#1e40af"
            metalness={0.8}
            roughness={0.2}
            emissive="#1e40af"
            emissiveIntensity={0.1}
          />
        </mesh>

        {/* Inner geometric pattern - representing the blue patterns */}
        <mesh position={[0, 0.15, 0]}>
          <torusGeometry args={[1, 0.3, 8, 16]} />
          <meshStandardMaterial
            color="#3b82f6"
            metalness={0.9}
            roughness={0.1}
            emissive="#3b82f6"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Orange/Gold accents */}
        <mesh position={[0, 0.3, 0]}>
          <torusGeometry args={[0.7, 0.1, 6, 12]} />
          <meshStandardMaterial
            color="#f59e0b"
            metalness={0.9}
            roughness={0.1}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Central diamond/crystal shape */}
        <mesh position={[0, 0.4, 0]}>
          <octahedronGeometry args={[0.3]} />
          <meshStandardMaterial
            color="#fbbf24"
            metalness={1}
            roughness={0}
            emissive="#fbbf24"
            emissiveIntensity={0.4}
          />
        </mesh>
      </group>
    </Float>
  )
}

function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#3b82f6" />
    </mesh>
  )
}

interface Logo3DProps {
  className?: string
  logoUrl?: string
}

export default function Logo3D({ className = "", logoUrl }: Logo3DProps) {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={<LoadingFallback />}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
          <Environment preset="city" />
          <Logo3DModel url={logoUrl} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
