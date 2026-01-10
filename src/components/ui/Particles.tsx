import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Geometry, Program, Mesh } from "ogl";
import "./Particles.css";

interface ParticlesProps {
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleColors?: string[];
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
  alphaParticles?: boolean;
  particleBaseSize?: number;
  sizeRandomness?: number;
  cameraDistance?: number;
  disableRotation?: boolean;
  pixelRatio?: number;
  className?: string;
}

const defaultColors = ["#ffffff", "#ffffff", "#ffffff"];

const hexToRgb = (hex: string): [number, number, number] => {
  hex = hex.replace("#", "");
  if (hex.length === 3) {
    hex = hex.split("").map(c => c + c).join("");
  }
  const num = parseInt(hex, 16);
  return [
    ((num >> 16) & 255) / 255,
    ((num >> 8) & 255) / 255,
    (num & 255) / 255
  ];
};

const vertex = `
attribute vec3 position;
attribute vec4 random;
attribute vec3 color;

uniform mat4 modelMatrix;
uniform mat4 viewMatrix;
uniform mat4 projectionMatrix;
uniform float uTime;
uniform float uSpread;
uniform float uBaseSize;
uniform float uSizeRandomness;

varying vec4 vRandom;
varying vec3 vColor;

void main() {
  vRandom = random;
  vColor = color;

  vec3 pos = position * uSpread;
  pos.z *= 10.0;

  vec4 mPos = modelMatrix * vec4(pos, 1.0);
  float t = uTime;

  mPos.x += sin(t * random.z + 6.28 * random.w);
  mPos.y += sin(t * random.y + 6.28 * random.x);
  mPos.z += sin(t * random.w + 6.28 * random.y);

  vec4 mvPos = viewMatrix * mPos;
  gl_PointSize = uBaseSize / length(mvPos.xyz);
  gl_Position = projectionMatrix * mvPos;
}
`;

const fragment = `
precision highp float;

uniform float uTime;
uniform float uAlphaParticles;
varying vec4 vRandom;
varying vec3 vColor;

void main() {
  vec2 uv = gl_PointCoord.xy;
  float d = length(uv - 0.5);

  if (uAlphaParticles < 0.5 && d > 0.5) discard;

  float alpha = uAlphaParticles > 0.5
    ? smoothstep(0.5, 0.4, d)
    : 1.0;

  gl_FragColor = vec4(vColor, alpha);
}
`;

const Particles: React.FC<ParticlesProps> = ({
  particleCount = 180,
  particleSpread = 10,
  speed = 0.1,
  particleColors,
  moveParticlesOnHover = true,
  particleHoverFactor = 1,
  alphaParticles = false,
  particleBaseSize = 90,
  sizeRandomness = 1,
  cameraDistance = 20,
  disableRotation = false,
  pixelRatio = 1,
  className
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({ dpr: pixelRatio, alpha: true });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    const camera = new Camera(gl, { fov: 15 });
    camera.position.z = cameraDistance;

    const resize = () => {
      renderer.setSize(container.clientWidth, container.clientHeight);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener("resize", resize);
    resize();

    const positions = new Float32Array(particleCount * 3);
    const randoms = new Float32Array(particleCount * 4);
    const colors = new Float32Array(particleCount * 3);
    const palette = particleColors?.length ? particleColors : defaultColors;

    for (let i = 0; i < particleCount; i++) {
      positions.set([
        (Math.random() * 2 - 1),
        (Math.random() * 2 - 1),
        (Math.random() * 2 - 1)
      ], i * 3);

      randoms.set([
        Math.random(),
        Math.random(),
        Math.random(),
        Math.random()
      ], i * 4);

      colors.set(hexToRgb(palette[Math.floor(Math.random() * palette.length)]), i * 3);
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: positions },
      random: { size: 4, data: randoms },
      color: { size: 3, data: colors }
    });

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSpread: { value: particleSpread },
        uBaseSize: { value: particleBaseSize * pixelRatio },
        uSizeRandomness: { value: sizeRandomness },
        uAlphaParticles: { value: alphaParticles ? 1 : 0 }
      },
      transparent: true,
      depthTest: false
    });

    const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program });

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.current.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    if (moveParticlesOnHover) container.addEventListener("mousemove", onMouseMove);

    let last = performance.now();
    const update = (t: number) => {
      requestAnimationFrame(update);
      program.uniforms.uTime.value += (t - last) * speed * 0.001;
      last = t;

      if (moveParticlesOnHover) {
        mesh.position.x = -mouse.current.x * particleHoverFactor;
        mesh.position.y = -mouse.current.y * particleHoverFactor;
      }

      if (!disableRotation) mesh.rotation.z += 0.002;

      renderer.render({ scene: mesh, camera });
    };

    update(last);

    return () => {
      window.removeEventListener("resize", resize);
      if (moveParticlesOnHover) container.removeEventListener("mousemove", onMouseMove);
      container.removeChild(gl.canvas);
    };
  }, []);

  return <div ref={containerRef} className={`particles-container ${className ?? ""}`} />;
};

export default Particles;
