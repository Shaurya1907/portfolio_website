import React from 'react'
import { Float, useGLTF, Billboard } from '@react-three/drei'

const CPlusPlusLogo = ({ scale, position, ...props }) => {
  const { nodes, materials } = useGLTF('/models/c.glb')

  return (
    <Billboard>
      <Float floatIntensity={1}>
        <group scale={scale} position={position} {...props} dispose={null}>
          
          <mesh
            geometry={nodes['C++_C++_0'].geometry}
            material={materials.material}
            position={[1450, -700, 199.569]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={3}
          />

        </group>
      </Float>
    </Billboard>
  )
}

useGLTF.preload('/models/c.glb')
export default CPlusPlusLogo