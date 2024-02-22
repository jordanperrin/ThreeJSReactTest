/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/film.glb 
Author: Alligator Alex (https://sketchfab.com/alligator_alex)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/35mm-film-roll-6d8a6d290de043e898420a04072a3a1e
Title: 35mm Film Roll
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Film(props) {
  const { nodes, materials } = useGLTF('/film.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes['LP_roll_film_Material_#27_0'].geometry} material={materials.Material_27} rotation={[-Math.PI / 2, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/film.glb')