/* eslint-disable no-bitwise */
import { validateNotNull } from 'src/utils';
import { GLProgram } from './gl-program';
import shaders from './shaders';
import { FluidManagerBase } from './fluid-base';
import vertexShaderSource from './test.vert';
import fragmentShaderSource from './test.frag';

export class FluidManager extends FluidManagerBase {
  textureWidth: number

  textureHeight: number

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.textureWidth = 0;
    this.textureHeight = 0;

    this.initPrograms();
    this.initBlit();
    this.initFramebuffers();
  }

  initPrograms() {
    // this.programs.test = new GLProgram(this.gl, vertexShaderSource, fragmentShaderSource);
    this.programs.display = new GLProgram(this.gl, shaders.vert, shaders.display);
  }

  initBlit() {
    const { gl } = this;
    // gl.ARRAY_BUFFER: Buffer containing vertex attributes,
    // such as vertex coordinates, texture coordinate data, or vertex color data.
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    // The contents are intended to be specified once by the application,
    // and used many times as the source for WebGL drawing and image specification commands.
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);

    // Buffer used for element indices.
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);

    // void gl.vertexAttribPointer(index, size, type, normalized, stride, offset);
    // bind the buffer currently bound to gl.ARRAY_BUFFER to a generic vertex attribute
    // of the current vertex buffer object and specifies its layout.
    gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

    // turns on the generic vertex attribute array at the specified index into the list of attribute arrays.
    gl.enableVertexAttribArray(0);
  }

  resize() {
    const { width, height } = this.canvas;

    if (this.width !== width || this.height !== height) {
      this.width = width;
      this.height = height;

      this.initFramebuffers();
    }
  }

  initFramebuffers() {
    const { gl, ext } = this;
    this.textureWidth = gl.drawingBufferWidth >> this.config.textureDownsample;
    this.textureHeight = gl.drawingBufferHeight >> this.config.textureDownsample;

    const { halfFloatTexType, formatRGBA, formatRG, formatR } = ext;
  }

  // destination: frameBuffer
  blit(destination: WebGLFramebuffer | null) {
    const { gl } = this;
    // method of the WebGL API binds a given WebGLFramebuffer to a target.
    // Collection buffer data storage of color, alpha, depth and stencil buffers used to render an image.
    gl.bindFramebuffer(gl.FRAMEBUFFER, destination);
    // method of the WebGL API renders primitives from array data.
    // drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void;
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  }

  update() {
    const { gl } = this;
    // const delta = (Date.now() - this.prevTime) / 1000;
    const delta = Math.min((Date.now() - this.prevTime) / 1000, 0.016);
    this.prevTime = Date.now();
    this.timeCount += 0.0001;

    gl.viewport(0, 0, this.textureWidth, this.textureHeight);

    gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    this.programs.display.bind();
    gl.uniform1i(this.programs.display.uniforms.uTexture, 0);
    this.blit(null);
  }
}
