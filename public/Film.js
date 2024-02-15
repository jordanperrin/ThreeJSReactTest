"use client";

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/film.gltf')
  return (
    <group {...props} dispose={null}>
      <group scale={0.04}>
        <mesh geometry={nodes['LP_roll_film_Material_#27_0'].geometry} material={materials.Material_27} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/film.gltf')
