"use client"
import { Canvas, useFrame } from "@react-three/fiber"
import { useGLTF, Environment, Float, PerspectiveCamera } from "@react-three/drei"
import { useRef, useEffect } from "react"
import * as THREE from "three"

function Drone() {
    const { scene } = useGLTF("/models/drone.glb")
    const droneRef = useRef<THREE.Group>(null)
    const mousePos = useRef({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            mousePos.current = {
                x: (event.clientX / window.innerWidth) * 2 - 1,
                y: -(event.clientY / window.innerHeight) * 2 + 1
            }
        }
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [])

    useFrame(() => {
        if (!droneRef.current) return

        const targetX = mousePos.current.x * 0.6
        const targetY = mousePos.current.y * 0.3
        const downwardOffset = 0.25;

        droneRef.current.rotation.y = THREE.MathUtils.lerp(droneRef.current.rotation.y, targetX, 0.1)
        droneRef.current.rotation.x = THREE.MathUtils.lerp(
            droneRef.current.rotation.x,
            -targetY + downwardOffset,
            0.1
        )
    })

    return (
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <primitive
                ref={droneRef}
                object={scene}
                scale={12}             /* Mantido conforme seu ajuste */
                position={[0, 1, 0]}   /* Mantido conforme seu ajuste */
            />
        </Float>
    )
}

export default function Hero3D() {
    return (
        <div className="w-full h-full relative">
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 7]} />
                <Environment files="/textures/shanghai.hdr" background blur={0.01} />
                <ambientLight intensity={0.8} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
                <Drone />
            </Canvas>
        </div>
    )
}