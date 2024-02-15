"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Film from "../../public/Film.js";
import { Suspense } from "react";
import {Canvas} from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";

export default function Home() {
  return (
    <div className={styles.container}>
      <Canvas className={styles.canvas}>
        <ambientLight intensity="0"/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <Film />
        </Suspense>
        <Environment preset="sunset"/>
      </Canvas>
    </div>
  );
}
