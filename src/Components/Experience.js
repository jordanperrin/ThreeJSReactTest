"use client";
import { OrbitControls} from "@react-three/drei";
import {Film} from "./Film";

export function Experience(){

    return(
        <>
        <ambientLight intensity={2}/>
            <OrbitControls/>
            <Film/>
        </>
    );
};