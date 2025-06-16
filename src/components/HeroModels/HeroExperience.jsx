import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import { Shiva } from "./Shiva.jsx"
import { useRef, Suspense } from "react"
import Particles from "./Particles.jsx"

const HeroExperience = () => {
  const modelRef = useRef()

  // Responsive values for mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  // Desktop: scale 3, position [0, -100, 0]
  // Mobile:  scale 2.3, position [0, -150, 0]
  const modelScale = isMobile ? 2.3 : 3
  const modelPosition = isMobile ? [0, -150, 0] : [0, -100, 0]
  const particleRadius = isMobile ? 40 : 100

  // Increase mobile container height so model isn't cut off
  const containerClass = isMobile
    ? "w-full h-[400px] relative"
    : "w-full h-screen relative"
  const containerStyle = isMobile
    ? {}
    : { height: "800px" }

  // Prevent OrbitControls from rotating when clicking the top 80px on mobile
  const handlePointerDown = (e) => {
    if (isMobile) {
      const bounding = e.currentTarget.getBoundingClientRect();
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      if (y - bounding.top < 80) {
        e.stopPropagation();
        e.preventDefault();
      }
    }
  };

  return (
    <div
      className={containerClass}
      style={containerStyle}
      onTouchStart={handlePointerDown}
      onMouseDown={handlePointerDown}
    >
      <Canvas
        className="w-full h-full"
        camera={{ position: [220, 80, -80], fov: 60 }}
        shadows
      >
        <Suspense fallback={null}>
          <ambientLight intensity={3} />
          <directionalLight position={[0, 10, 10]} intensity={2} castShadow />
          <spotLight position={[-10, 10, 10]} intensity={2} castShadow />

          <Particles count={350} radius={particleRadius} color="#5fadff" />

          <OrbitControls 
            makeDefault
            enablePan={true} 
            enableZoom={true} 
            enableRotate={true}
            minDistance={350}
            maxDistance={450}
            target={[0, 0, 0]}
            enabled={true}
          />

          <group 
            ref={modelRef}
            position={modelPosition}
            scale={modelScale}
            rotation={[0, Math.PI/1.5, 0]}
          >
            <Shiva />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default HeroExperience