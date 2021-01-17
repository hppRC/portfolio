import { GLProgram } from './gl-program';

export function getUniforms(gl: WebGLRenderingContext, program: GLProgram) {
  const uniforms = [];
  const uniformCount = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS);
  for (let i = 0; i < uniformCount; i += 1) {
    const uniformName = gl.getActiveUniform(program, i).name;
    uniforms[uniformName] = gl.getUniformLocation(program, uniformName);
  }
  return uniforms;
}
