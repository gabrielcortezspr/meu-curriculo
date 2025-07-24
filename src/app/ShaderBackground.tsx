
"use client";
// Componente React para fundo animado com shader GLSL
// Usa WebGL para renderizar o shader do Shadertoy
import { useEffect, useRef } from "react";

const fragmentShaderSource = `
precision highp float;
uniform float iTime;
uniform vec2 iResolution;

void main() {
    vec2 fragCoord = gl_FragCoord.xy;
    // Normaliza as coordenadas do fragmento
    vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);
    
    // Escala de tempo
    float timeScale = 1.0;
    float scaledTime = iTime / 12.0 * timeScale;

    // Base em tons de cinza
    float baseGray = 1.0;
    
    // Mais iterações para mais curvas
    // Ondulações com frequência e força ajustadas
    for(float i = 1.0; i < 30.0; i++) {
        float freqX = 4.0; // frequência horizontal aumentada
        float freqY = 3.0; // frequência vertical aumentada
        float amp = 0.5;   // amplitude ajustada para evitar exageros

        uv.x += amp / i * cos(i * freqX * uv.y + scaledTime);
        uv.y += amp / i * cos(i * freqY * uv.x + scaledTime);
    }

    // Brilho invertido
    float brightness = 1.0 - abs(sin(scaledTime - uv.x - uv.y));
    
    // Cor final em tons de cinza
    gl_FragColor = vec4(vec3(baseGray * brightness), 1.0);
}
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw new Error(gl.getShaderInfoLog(shader) || "Shader compile error");
  }
  return shader;
}

function createProgram(gl: WebGLRenderingContext, vsSource: string, fsSource: string) {
  const vs = createShader(gl, gl.VERTEX_SHADER, vsSource);
  const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource);
  const program = gl.createProgram()!;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(gl.getProgramInfoLog(program) || "Program link error");
  }
  return program;
}

const vertexShaderSource = `
attribute vec2 position;
void main() {
  gl_Position = vec4(position, 0, 1);
}
`;

export default function ShaderBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    // Cria programa WebGL
    const program = createProgram(gl, vertexShaderSource, fragmentShaderSource);
    gl.useProgram(program);

    // Define quad de tela cheia
    const positionLoc = gl.getAttribLocation(program, "position");
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
      -1, -1, 1, -1, -1, 1, 1, 1
    ]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    // Uniforms
    const iTimeLoc = gl.getUniformLocation(program, "iTime");
    const iResolutionLoc = gl.getUniformLocation(program, "iResolution");

    let start = performance.now();
    let running = true;

    function resize() {
      if (!canvas || !gl) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = "100vw";
      canvas.style.height = "100vh";
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();
    window.addEventListener("resize", resize);

    // Loop de animação
    function render() {
      if (!running || !canvas || !gl) return;
      const now = performance.now();
      const t = (now - start) / 1000;
      gl.useProgram(program);
      gl.uniform1f(iTimeLoc, t);
      gl.uniform2f(iResolutionLoc, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    }
    render();

    return () => {
      running = false;
      window.removeEventListener("resize", resize);
    };
  }, []);

  // Canvas ocupa toda a tela, fixo no fundo
  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
      }}
    />
  );
}
