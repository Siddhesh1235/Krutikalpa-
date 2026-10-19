"use client";

import React, { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Sphere,
  Line,
} from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.0015;
    }
  });

  const points = useMemo(() => {
    const arr: [number, number, number][] = [];
    for (let i = 0; i < 300; i++) {
      const phi = Math.acos(-1 + (2 * i) / 300);
      const theta = Math.sqrt(300 * Math.PI) * phi;

      const x = 5 * Math.cos(theta) * Math.sin(phi);
      const y = 5 * Math.sin(theta) * Math.sin(phi);
      const z = 5 * Math.cos(phi);

      arr.push([x, y, z]);
    }
    return arr;
  }, []);

  const arcs = useMemo(() => {
    const lines: [number, number, number][][] = [];
    for (let i = 0; i < 80; i++) {
      const p1 = points[Math.floor(Math.random() * points.length)];
      const p2 = points[Math.floor(Math.random() * points.length)];
      lines.push([p1, p2]);
    }
    return lines;
  }, [points]);

  return (
    <group>
      {/* Earth Core */}
      <Sphere ref={globeRef} args={[5, 64, 64]}>
        <meshStandardMaterial
          color="#09090b"
          emissive="#ea580c"
          emissiveIntensity={0.25}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>

      {/* Atmosphere Glow */}
      <Sphere args={[5.15, 64, 64]}>
        <meshBasicMaterial
          color="#f97316"
          transparent
          opacity={0.09}
          side={THREE.BackSide}
        />
      </Sphere>

      {/* Network Points */}
      {points.map((p, i) => (
        <mesh key={i} position={[p[0], p[1], p[2]]}>
          <sphereGeometry args={[0.045, 8, 8]} />
          <meshBasicMaterial color="#fb923c" />
        </mesh>
      ))}

      {/* Connection Lines */}
      {arcs.map((line, i) => (
        <Line
          key={i}
          points={line}
          color="#f97316"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}
    </group>
  );
}

function FloatingParticles() {
  const particles = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 2000; i++) {
      arr.push(
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80,
        (Math.random() - 0.5) * 80
      );
    }
    return new Float32Array(arr);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particles, 3]}
        />
      </bufferGeometry>
      <pointsMaterial color="#fb923c" size={0.06} transparent opacity={0.7} />
    </points>
  );
}

export function GlobeNetworks() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-[#F97316]/30 border-t-[#F97316] animate-spin" />
      </div>
    );
  }

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 14], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        className="w-full h-full !bg-transparent"
      >
        <ambientLight intensity={1.2} />
        <pointLight position={[20, 20, 20]} color="#f97316" intensity={15} />
        <Stars radius={150} depth={80} count={2500} factor={4} />
        <FloatingParticles />
        <Globe />
        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 1.5}
          minPolarAngle={Math.PI / 3}
        />
      </Canvas>
    </div>
  );
}

export default GlobeNetworks;
