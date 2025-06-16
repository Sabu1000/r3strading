import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";

const Particles = ({ count = 200, radius = 100, color = "#ffffff" }) => {
  const mesh = useRef();

  // Detect mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  // Only make particles bigger for mobile
  const particleSize = isMobile ? 2 : 1;

  // Shift particles to the left on mobile only (keep as in your code)
  const xOffset = isMobile ? 30 : 0;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * radius * 2 + xOffset,
          Math.random() * radius + radius - 50,
          (Math.random() - 0.5) * radius * 2,
        ],
        speed: 0.03 + Math.random() * 0.02,
      });
    }
    return temp;
  }, [count, radius, xOffset]);

  useFrame(() => {
    const positions = mesh.current.geometry.attributes.position.array;
    for (let i = 0; i < count; i++) {
      let y = positions[i * 3 + 1];
      y -= particles[i].speed;
      if (y < -radius/2) y = Math.random() * radius + radius;
      positions[i * 3 + 1] = y;
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  const positions = new Float32Array(count * 3);
  particles.forEach((p, i) => {
    positions[i * 3] = p.position[0];
    positions[i * 3 + 1] = p.position[1];
    positions[i * 3 + 2] = p.position[2];
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        size={particleSize}
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
};

export default Particles;