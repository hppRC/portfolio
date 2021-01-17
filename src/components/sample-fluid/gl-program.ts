function compileShader(gl: WebGLRenderingContext, type: GLenum, source: string) {
  const shader: WebGLShader | null = gl.createShader(type);
  if (!shader) {
    throw new Error("shader null error!\n can't compile shader");
  }

  // sets the source code of a WebGLShader.
  gl.shaderSource(shader, source);
  // compiles a GLSL shader into binary data so that it can be used by a WebGLProgram.
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw gl.getShaderInfoLog(shader);
  }

  return shader;
}

export default class GLProgram {
  uniforms: {[key:string]: WebGLUniformLocation|null};

  gl: WebGLRenderingContext;

  program: WebGLProgram | null;

  constructor(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) {
    const vertexShader: WebGLShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
    const fragmentShader: WebGLShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);

    this.uniforms = {};
    // return: A WebGLProgram object that is a combination of two compiled WebGLShaders consisting of a vertex shader and a fragment shader
    this.program = gl.createProgram();
    this.gl = gl;

    if (!this.program) {
      throw Error('Could not compile WebGL program because this.program is null');
    }

    gl.attachShader(this.program, vertexShader);
    gl.attachShader(this.program, fragmentShader);
    // completing the process of preparing the GPU code for the program's fragment and vertex shaders.
    gl.linkProgram(this.program);

    // Returns a GLboolean indicating whether or not the last link operation was successful.
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      throw gl.getProgramInfoLog(this.program);
    }

    // A WebGLProgram to get parameter information from.
    // 指定された type によって様々な値を返す
    const uniformCount: GLint = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);

    for (let i = 0; i < uniformCount; i += 1) {
      const activeInfo = gl.getActiveUniform(this.program, i);
      if (activeInfo) {
        const uniformName = activeInfo.name;
        // the location of a specific uniform variable which is part of a given WebGLProgram.
        // The uniform variable is returned as a WebGLUniformLocation object, which is an opaque identifier used
        // to specify where in the GPU's memory that uniform variable is located.
        // GPUのメモリ上で uniform 値がどこに存在しているかを表す
        this.uniforms[uniformName] = gl.getUniformLocation(this.program, uniformName);
      }
    }
  }

  bind() {
    // method of the WebGL API sets the specified WebGLProgram as part of the current rendering state.
    // いまはこの shader を使うよ〜と言っている感じ？
    this.gl.useProgram(this.program);
  }
}
