"use client";
import styles from "./page.module.css";
import {Canvas} from "@react-three/fiber";
import { Experience } from "../Components/Experience.js";

export default function Home() {
  return (
    <>
      <Canvas className={styles.canvas}>
        <Experience/>
      </Canvas>
      </>
  );
}
