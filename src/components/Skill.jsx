"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";
import "../assets/components-style/Skill.css"

export default function RotatingCube() {
  const ref = useRef(null);



  useAnimationFrame((time) => {
    if (ref.current) {
      const rotate = Math.sin(time / 500) * 45;
      const y = (1 + Math.sin(time / 500)) * -50;
      // const roatte  = MouseEvent
      ref.current.style.transform = `translateY(${rotate*1.5}px) rotateX(${rotate*2.5}deg) rotateY(${rotate}deg)`;
    }
  });

  return (
    <div className="container-cube  position-relative ">
      <div className="cube" ref={ref}>
        <div className="side side-attachments front" />
        <div className="side side-attachments back" />
        <div className="side side-attachments left" />
        <div className="side side-attachments right" />
        <div className="side side-attachments top" />
        <div className="side side-attachments bottom" />
      </div>
    </div>
  );
}
