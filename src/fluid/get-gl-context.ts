import { validateNotNull } from 'src/utils';

/* eslint-disable camelcase */
export type Extensions = {
    formatRGBA: { internalFormat: GLint, format: GLint },
    formatRG: { internalFormat: GLint, format: GLint },
    formatR: { internalFormat: GLint, format: GLint },
    halfFloatTexType: OES_texture_half_float_linear,
    supportLinearFiltering: OES_texture_half_float_linear,
  }

export const getWebGLContext = (canvas: HTMLCanvasElement): {
    gl: WebGLRenderingContext,
    ext: Extensions
} => {
  const gl = validateNotNull(canvas.getContext('webgl'));

  // adds texture formats with 16-(aka half float) and 32-bit floating-point components.
  // 半精度浮動小数点数でなんやかんややるやつっぽい、パフォーマンスにだいぶ関係がありそう
  const halfFloat = validateNotNull(gl.getExtension('OES_texture_half_float'));
  const supportLinearFiltering = validateNotNull(gl.getExtension('OES_texture_half_float_linear'));

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  return {
    gl,
    ext: {
      formatRGBA: { internalFormat: gl.RGBA, format: gl.RGBA },
      formatRG: { internalFormat: gl.RGBA, format: gl.RGBA },
      formatR: { internalFormat: gl.RGBA, format: gl.RGBA },
      halfFloatTexType: halfFloat.HALF_FLOAT_OES,
      supportLinearFiltering,
    },
  };
};
