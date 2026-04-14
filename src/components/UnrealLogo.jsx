import React from 'react'
import { Float, useGLTF, Billboard } from '@react-three/drei'

const UnrealLogo = (props) => {
  const { nodes, materials } = useGLTF('/models/unreal_logo.glb')

  return (
    <Billboard>
      <Float floatIntensity={1}>
        <group position={[-20, 8, 0]} scale={0.006} {...props} dispose={null}>
          
          <mesh
            geometry={nodes.U__0.geometry}
            material={materials['Scene_-_Root']}
            position={[-50, 0.079, 0]}
            rotation={[Math.PI / 2, -Math.PI, Math.PI / 3]}  // ✅ fixed 180 → Math.PI
            scale={[20, 20, 20]}
          />

          <mesh
            geometry={nodes.Circle__0.geometry}
            material={materials['Scene_-_Root']}
            position={[-50, 0.079, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[20, 20, 20]}
          />

        </group>
      </Float>
    </Billboard>
  )
}

useGLTF.preload('/models/unreal_logo.glb')
export default UnrealLogo