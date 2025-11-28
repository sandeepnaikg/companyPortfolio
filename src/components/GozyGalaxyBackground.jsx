import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

// ⭐ 1. Stars Generator
function Stars({ count = 1500 }) {
  const group = useRef();

  const positions = useMemo(() => {
    const arr = [];
    for (let i = 0; i < count; i++) {
      arr.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 20,
      ]);
    }
    return arr;
  }, [count]);

  useFrame(() => {
    if (!group.current) return;
    group.current.rotation.x += 0.00015;
    group.current.rotation.y += 0.0001;
  });

  return (
    <group ref={group}>
      {positions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.015, 8, 8]} />
          <meshBasicMaterial color="#d3b5ff" />
        </mesh>
      ))}
    </group>
  );
}

// ⭐ 2. Rotating Planet
function Planet() {
  const ref = useRef();

  useFrame(() => {
    ref.current.rotation.y += 0.0008;
    ref.current.rotation.x += 0.0002;
  });

  return (
    <mesh ref={ref} position={[0, -1.2, -4]}>
      <sphereGeometry args={[1.3, 32, 32]} />
      <meshStandardMaterial
        color="#643dff"
        emissive="#a974ff"
        emissiveIntensity={0.4}
        roughness={0.65}
        metalness={0.2}
      />
    </mesh>
  );
}

// ⭐ 3. Purple Nebula Fog Layer (CSS overlay)
const NebulaOverlay = () => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      zIndex: 0,
      pointerEvents: "none",
      background:
        "radial-gradient(circle at 30% 40%, rgba(150,80,255,0.55), transparent 60%), radial-gradient(circle at 70% 60%, rgba(80,120,255,0.45), transparent 65%)",
      filter: "blur(70px)",
    }}
  />
);

// ⭐ MAIN EXPORT
const GozyGalaxyBackground = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <NebulaOverlay />

      <Canvas camera={{ position: [0, 0, 7], fov: 55 }}>
        <ambientLight intensity={0.7} />
        <pointLight position={[4, 4, 4]} intensity={0.7} />

        {/* Stars + Planet */}
        <Stars count={1200} />
        <Planet />
      </Canvas>
    </div>
  );
};

export default GozyGalaxyBackground;
