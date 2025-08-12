"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Float, Environment, Sphere, Ring, Torus } from "@react-three/drei"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Floating Tech Orb Component
function TechOrb({ position, scale = 1, color = "#3b82f6" }: { position: [number, number, number], scale?: number, color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y += 0.01
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </Float>
  )
}

// Rotating Ring Component
function TechRing({ position, scale = 1, color = "#f59e0b" }: { position: [number, number, number], scale?: number, color?: string }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.005
      meshRef.current.rotation.x += 0.002
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[2, 0.1, 16, 100]} />
        <meshStandardMaterial
          color={color}
          metalness={0.9}
          roughness={0.1}
          emissive={color}
          emissiveIntensity={0.3}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

// Data Nodes Component
function DataNode({ position, scale = 1 }: { position: [number, number, number], scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.015
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <octahedronGeometry args={[0.5]} />
      <meshStandardMaterial
        color="#06b6d4"
        metalness={1}
        roughness={0}
        emissive="#06b6d4"
        emissiveIntensity={0.4}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

// Particle System Component
function TechParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particleCount = 100
  const positions = new Float32Array(particleCount * 3)
  
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.001
      particlesRef.current.rotation.x += 0.0005
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3b82f6"
        size={0.05}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

// Main Tech Scene Component
function TechSpaceObjects() {
  return (
    <>
      {/* Ambient particles */}
      <TechParticles />
      
      {/* Main central tech orb */}
      <TechOrb position={[0, 0, 0]} scale={1.5} color="#3b82f6" />
      
      {/* Surrounding tech rings */}
      <TechRing position={[0, 0, 0]} scale={1} color="#f59e0b" />
      <TechRing position={[0, 0, 0]} scale={1.5} color="#06b6d4" />
      
      {/* Floating data nodes */}
      <DataNode position={[3, 2, -2]} scale={0.8} />
      <DataNode position={[-3, -1, 2]} scale={0.6} />
      <DataNode position={[2, -2, -3]} scale={0.7} />
      <DataNode position={[-2, 3, 1]} scale={0.9} />
      
      {/* Additional tech orbs */}
      <TechOrb position={[4, 1, -1]} scale={0.7} color="#8b5cf6" />
      <TechOrb position={[-4, -2, 1]} scale={0.8} color="#06b6d4" />
      <TechOrb position={[1, 3, -4]} scale={0.6} color="#f59e0b" />
    </>
  )
}

function LoadingFallback() {
  return (
    <mesh>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} />
    </mesh>
  )
}

interface TechSpaceSceneProps {
  className?: string
  isDesktop?: boolean
}

export default function TechSpaceScene({ className = "", isDesktop = false }: TechSpaceSceneProps) {
  return (
    <div className={`${isDesktop ? 'absolute inset-0 w-full h-full' : 'w-full h-full'} ${className}`}>
      <Canvas 
        camera={{ 
          position: isDesktop ? [8, 2, 8] : [0, 0, 8], 
          fov: isDesktop ? 60 : 50 
        }}
        style={{ 
          background: 'transparent',
          pointerEvents: isDesktop ? 'none' : 'auto'
        }}
      >
        <Suspense fallback={<LoadingFallback />}>
          {/* Lighting setup */}
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#f59e0b" />
          <pointLight position={[0, 10, -10]} intensity={0.7} color="#06b6d4" />
          
          {/* Environment for reflections */}
          <Environment preset="night" />
          
          {/* Tech objects */}
          <TechSpaceObjects />
          
          {/* Controls - only for mobile */}
          {!isDesktop && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  )
}
