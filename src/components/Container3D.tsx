import React, { useRef, Suspense } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Group } from 'three'

interface Container3DProps {
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: number
  animate?: boolean
  color?: string
}

function ContainerModel({ color, animate, ...props }: Container3DProps) {
  const groupRef = useRef<Group>(null)
  
  try {
    const { scene } = useGLTF('/container.gltf')
    
    useFrame((state) => {
      if (groupRef.current && animate) {
        // Gentle floating animation
        groupRef.current.position.y = (props.position?.[1] || 0) + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
        
        // Slow rotation
        groupRef.current.rotation.y = (props.rotation?.[1] || 0) + state.clock.elapsedTime * 0.2
      }
    })

    return (
      <group ref={groupRef} {...props}>
        <primitive 
          object={scene.clone()} 
          scale={props.scale}
        />
      </group>
    )
  } catch (error) {
    console.warn('GLTF loading failed, using fallback geometry:', error)
    return <FallbackContainer {...props} color={color} animate={animate} />
  }
}

function FallbackContainer({ 
  position = [0, 0, 0], 
  rotation = [0, 0, 0], 
  scale = 1,
  animate = true,
  color = '#ff6b35'
}: Container3DProps) {
  const groupRef = useRef<Group>(null)

  useFrame((state) => {
    if (groupRef.current && animate) {
      // Gentle floating animation
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      
      // Slow rotation
      groupRef.current.rotation.y = rotation[1] + state.clock.elapsedTime * 0.2
    }
  })

  return (
    <group 
      ref={groupRef} 
      position={position} 
      rotation={rotation} 
      scale={scale}
    >
      {/* Main Container Body */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[4, 2.5, 8]} />
        <meshStandardMaterial 
          color={color} 
          metalness={0.6} 
          roughness={0.3}
        />
      </mesh>

      {/* Container End Wall (Front) */}
      <mesh position={[0, 0, -4.05]} castShadow>
        <boxGeometry args={[3.8, 2.3, 0.1]} />
        <meshStandardMaterial 
          color="#34495e" 
          metalness={0.8} 
          roughness={0.2}
        />
      </mesh>

      {/* Container Doors (Back) */}
      <mesh position={[-1, 0, 4.05]} castShadow>
        <boxGeometry args={[1.8, 2.3, 0.1]} />
        <meshStandardMaterial 
          color="#2c3e50" 
          metalness={0.7} 
          roughness={0.3}
        />
      </mesh>
      <mesh position={[1, 0, 4.05]} castShadow>
        <boxGeometry args={[1.8, 2.3, 0.1]} />
        <meshStandardMaterial 
          color="#2c3e50" 
          metalness={0.7} 
          roughness={0.3}
        />
      </mesh>

      {/* Door Handles */}
      <mesh position={[-0.2, 0, 4.1]} castShadow>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial 
          color="#1a252f" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0.2, 0, 4.1]} castShadow>
        <boxGeometry args={[0.1, 0.3, 0.1]} />
        <meshStandardMaterial 
          color="#1a252f" 
          metalness={0.9} 
          roughness={0.1}
        />
      </mesh>

      {/* Side corrugations - detailed version */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh key={`right-${i}`} position={[2.05, 0, -3.5 + i * 0.6]} castShadow>
          <boxGeometry args={[0.05, 2.2, 0.1]} />
          <meshStandardMaterial 
            color="#34495e" 
            metalness={0.7} 
            roughness={0.3}
          />
        </mesh>
      ))}

      {Array.from({ length: 12 }, (_, i) => (
        <mesh key={`left-${i}`} position={[-2.05, 0, -3.5 + i * 0.6]} castShadow>
          <boxGeometry args={[0.05, 2.2, 0.1]} />
          <meshStandardMaterial 
            color="#34495e" 
            metalness={0.7} 
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Top corrugations */}
      {Array.from({ length: 12 }, (_, i) => (
        <mesh key={`top-${i}`} position={[-1.5 + i * 0.25, 1.25, 0]} castShadow>
          <boxGeometry args={[0.1, 0.05, 7.8]} />
          <meshStandardMaterial 
            color="#34495e" 
            metalness={0.7} 
            roughness={0.3}
          />
        </mesh>
      ))}

      {/* Corner posts */}
      {[
        [2, 1.25, 4], [2, 1.25, -4], [2, -1.25, 4], [2, -1.25, -4],
        [-2, 1.25, 4], [-2, 1.25, -4], [-2, -1.25, 4], [-2, -1.25, -4]
      ].map((pos, i) => (
        <mesh key={`corner-${i}`} position={pos as [number, number, number]} castShadow>
          <boxGeometry args={[0.15, 0.15, 0.15]} />
          <meshStandardMaterial 
            color="#2c3e50" 
            metalness={0.9} 
            roughness={0.1}
          />
        </mesh>
      ))}

      {/* Container marking/text panel */}
      <mesh position={[0, 0.5, -4.01]} castShadow>
        <boxGeometry args={[3, 0.8, 0.02]} />
        <meshStandardMaterial 
          color="#ffffff" 
          metalness={0.1} 
          roughness={0.9}
        />
      </mesh>

      {/* Container ID numbers simulation */}
      {Array.from({ length: 4 }, (_, i) => (
        <mesh key={`id-${i}`} position={[-1.2 + i * 0.8, 0.5, -3.99]} castShadow>
          <boxGeometry args={[0.6, 0.15, 0.01]} />
          <meshStandardMaterial 
            color="#2c3e50" 
            metalness={0.1} 
            roughness={0.9}
          />
        </mesh>
      ))}

      {/* Forklift pockets (bottom channels) */}
      <mesh position={[0, -1.35, 0]} castShadow>
        <boxGeometry args={[4.2, 0.2, 0.3]} />
        <meshStandardMaterial 
          color="#1a252f" 
          metalness={0.8} 
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, -1.35, 2]} castShadow>
        <boxGeometry args={[4.2, 0.2, 0.3]} />
        <meshStandardMaterial 
          color="#1a252f" 
          metalness={0.8} 
          roughness={0.4}
        />
      </mesh>
      <mesh position={[0, -1.35, -2]} castShadow>
        <boxGeometry args={[4.2, 0.2, 0.3]} />
        <meshStandardMaterial 
          color="#1a252f" 
          metalness={0.8} 
          roughness={0.4}
        />
      </mesh>
    </group>
  )
}

export function Container3D(props: Container3DProps) {
  return (
    <Suspense fallback={<FallbackContainer {...props} />}>
      <ContainerModel {...props} />
    </Suspense>
  )
}

// Preload the GLTF model
useGLTF.preload('/container.gltf') 