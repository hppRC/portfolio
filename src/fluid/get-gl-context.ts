function validateNotNull<T>(obj: T | null): T {
  if (!obj) {
    throw Error('null is not allowed');
  }
  return obj;
}

export const getWebGLContext = (canvas: HTMLCanvasElement) => {
  const gl = validateNotNull(canvas.getContext('webgl'));

  const halfFloat = validateNotNull(gl.getExtension('OES_texture_half_float'));
  const supportLinearFiltering = validateNotNull(gl.getExtension('OES_texture_half_float_linear'));

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  const halfFloatTexType = halfFloat.HALF_FLOAT_OES;
  const formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
  const formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
  const formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
};
