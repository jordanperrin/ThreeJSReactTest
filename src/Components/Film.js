/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/film.glb 
Author: Alligator Alex (https://sketchfab.com/alligator_alex)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/35mm-film-roll-6d8a6d290de043e898420a04072a3a1e
Title: 35mm Film Roll
*/

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';

export function Film(props) {
  const { nodes, materials } = useGLTF('/film.glb');
  const film = useRef();
  const scroll = useScroll();
  const tl = useRef();


  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration())
  })

  useLayoutEffect(() => {
    tl.current = gsap.timeline({ defaults: { duration: 1 } })

    tl.current
      .from(film.current.position,
         { 
          x: -1
         }
         , 0)
      .from(film.current.scale,
         {
          duration:0.85,
          x: -.3,
          y: -.3, 
          z: -.3 
        },
         0)
      .from(film.current.rotation,
        {
          duration: 1,
          x: Math.PI / 1,
          y: -Math.PI / 0.8,
          z: Math.PI/0.8
        },
        0
      );






  }, [])

  return (
    <group {...props} dispose={null} ref={film}>
      <group scale={0.023}>
        <mesh geometry={nodes['LP_roll_film_Material_#27_0'].geometry} material={materials.Material_27} rotation={[-Math.PI / 1.9, 0, -.3]} position={[23, -12, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/film.glb')
