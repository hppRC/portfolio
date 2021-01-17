import { validateNotNull } from 'src/utils';

export class GLProgram {
    uniforms: {[key:string]: WebGLUniformLocation};

    gl: WebGLRenderingContext;

    program: WebGLProgram;

    constructor(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) {
      this.gl = gl;
      this.program = this.createProgram(vertexSource, fragmentSource);
      this.uniforms = this.getUniforms();
    }

    getUniforms() {
      const { gl } = this;
      const uniforms: {[key:string]: WebGLUniformLocation} = {};
      // A WebGLProgram to get parameter information from.
      // 指定された type によって様々な値を返すのでany
      const uniformCount: GLint = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);

      for (let i = 0; i < uniformCount; i += 1) {
        const uniformName = validateNotNull(gl.getActiveUniform(this.program, i)).name;
        uniforms[uniformName] = validateNotNull(gl.getUniformLocation(this.program, uniformName));
      }
      return uniforms;
    }

    createProgram(vertexSource: string, fragmentSource: string) {
      const { gl } = this;
      const vertexShader: WebGLShader = this.compileShader(gl.VERTEX_SHADER, vertexSource);
      const fragmentShader: WebGLShader = this.compileShader(gl.FRAGMENT_SHADER, fragmentSource);
      // return: A WebGLProgram object that is a combination of two compiled WebGLShaders consisting of a vertex shader and a fragment shader
      const program = validateNotNull(gl.createProgram());

      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      // completing the process of preparing the GPU code for the program's fragment and vertex shaders.
      gl.linkProgram(program);

      // Returns a GLboolean indicating whether or not the last link operation was successful.
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw gl.getProgramInfoLog(program);
      }
      return program;
    }

    compileShader(type: GLenum, source: string) {
      const { gl } = this;
      const shader: WebGLShader = validateNotNull(gl.createShader(type));

      // sets the source code of a WebGLShader.
      gl.shaderSource(shader, source);
      // compiles a GLSL shader into binary data so that it can be used by a WebGLProgram.
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw gl.getShaderInfoLog(shader);
      }

      return shader;
    }

    bind() {
      // method of the WebGL API sets the specified WebGLProgram as part of the current rendering state.
      // いまはこの shader を使うよ〜と言っている感じ？
      this.gl.useProgram(this.program);
    }
}
