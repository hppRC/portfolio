import { validateNotNull } from 'src/utils';
import { GLProgram } from './gl-program';
import { getWebGLContext, Extensions } from './get-gl-context';

const config = {
  textureDownsample: 1,
  densityDissipation: 0.98,
  velocityDissipation: 0.99,
  pressureDissipation: 0.8,
  pressureIterations: 25,
  curl: 30,
  splatRadius: 0.005,
} as const;

interface FluidManagerProps {
    canvas: HTMLCanvasElement,
    gl: WebGLRenderingContext,
    ext: Extensions,
    programs: {[key: string]: GLProgram}
    prevTime: number;
    timeCount: number;
    width: number
    height: number
    config: typeof config
}

export class FluidManagerBase implements FluidManagerProps {
    canvas: HTMLCanvasElement;

    gl: WebGLRenderingContext;

    ext: Extensions;

    programs: {[key: string]: GLProgram};

    prevTime: number

    timeCount: number

    width: number

    height: number

    config: typeof config

    constructor(canvas: HTMLCanvasElement) {
      this.canvas = canvas;
      const { gl, ext } = getWebGLContext(canvas);
      this.gl = gl;
      this.ext = ext;
      this.programs = { };
      this.prevTime = Date.now();
      this.timeCount = 0;
      this.width = canvas.width;
      this.height = canvas.height;
      this.config = config;
    }

    createFBO(
      texId: GLenum,
      w:number,
      h:number,
      internalFormat: number,
      format: number,
      type: number,
      param: GLint,
    ) {
      const { gl } = this;
      gl.activeTexture(gl.TEXTURE0 + texId);

      const texture = validateNotNull(gl.createTexture());
      gl.bindTexture(gl.TEXTURE_2D, texture);

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, param);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, param);

      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      // texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
      // オフスクリーンレンダリング用のテクスチャを準備
      gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, w, h, 0, format, type, null);

      const frameBuffer = gl.createFramebuffer();
      gl.bindFramebuffer(gl.FRAMEBUFFER, frameBuffer);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
      gl.viewport(0, 0, w, h);
      gl.clear(gl.COLOR_BUFFER_BIT);

      return [texture, frameBuffer, texId];
    }

    // Buffer を交互に切り替えながら描写する
    createDoubleFBO(texId: number, w: number, h: number, internalFormat: number, format: number, type: number, param: number) {
      let fbo1 = this.createFBO(texId, w, h, internalFormat, format, type, param);
      let fbo2 = this.createFBO(texId + 1, w, h, internalFormat, format, type, param);

      return {
        get read() {
          return fbo1;
        },
        get write() {
          return fbo2;
        },
        swap() {
          const temp = fbo1;
          fbo1 = fbo2;
          fbo2 = temp;
        },
      };
    }
}
