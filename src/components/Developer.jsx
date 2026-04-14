import React, { useRef, useEffect, useMemo } from 'react'
import { useAnimations, useFBX, useGLTF } from '@react-three/drei'

const Troop = ({ animationName = 'idle', ...props }) => {
  const group = useRef()

  const { nodes, materials } = useGLTF('/models/character.glb')

  const fbx1 = useFBX('/models/animations/idle.fbx')
  const fbx2 = useFBX('/models/animations/salute.fbx')
  const fbx3 = useFBX('/models/animations/victory.fbx')
  const fbx4 = useFBX('/models/animations/Bow.fbx')


  const animations = useMemo(() => {
    if (!nodes) return []

    const fbxFiles = [
      { fbx: fbx1, name: 'idle' },
      { fbx: fbx2, name: 'salute' },
      { fbx: fbx3, name: 'victory' },
      { fbx: fbx4, name: 'bow' },
    ]

    const processed = []

    fbxFiles.forEach(({ fbx, name }) => {
      if (!fbx?.animations?.length) return

      fbx.animations.forEach((clip) => {
        const cloned = clip.clone()

        cloned.tracks = cloned.tracks
          .map((track) => {
            const parts = track.name.split('.')
            const property = parts.pop()
            const boneName = parts.join('.')

            const match = Object.keys(nodes).find((nodeName) =>
              nodeName.toLowerCase().includes(boneName.toLowerCase())
            )

            if (!match) return null

            track.name = `${match}.${property}`
            return track
          })
          .filter(Boolean)

        cloned.name = name.toLowerCase()
        processed.push(cloned)
      })
    })

    return processed
  }, [nodes, fbx1, fbx2, fbx3, fbx4])

  const { actions } = useAnimations(animations, group)

  useEffect(() => {
    if (!actions) return

    const action =
      actions[animationName.toLowerCase()] || actions['idle']

    if (!action) return

    action.reset().fadeIn(0.5).play()

    return () => action.fadeOut(0.5)
  }, [actions, animationName])

  if (!nodes) return null

  return (
    <group ref={group} {...props} dispose={null}>
      <group scale={0.009} position={[0, 0.15, 0]}>
        <primitive object={nodes._rootJoint} />

        {Object.keys(nodes)
          .filter((key) => nodes[key].isSkinnedMesh)
          .map((key) => {
            const mesh = nodes[key]

            return (
              <skinnedMesh
                key={key}
                geometry={mesh.geometry}
                skeleton={mesh.skeleton}
                material={
                  mesh.material?.name
                    ? materials[mesh.material.name]
                    : mesh.material
                }
              />
            )
          })}
      </group>
    </group>
  )
}

export default Troop