"use client";
import { OrbitControls, ScrollControls} from "@react-three/drei";
import {Film} from "./Film";

export function Experience(){

    return(
        <>
        <color attach="background" args={['#333333']}/>
            <ambientLight intensity={1.5}/>
            <OrbitControls enableZoom={false} />
            <ScrollControls pages={3} damping={0.25}>
                <Film/>
            </ScrollControls>
            
        </>
    );
};