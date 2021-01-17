type GLRenderingContext = WebGL2RenderingContext | WebGLRenderingContext;

const supportRenderTextureFormat = (gl: GLRenderingContext, internalFormat: GLint, format:GLenum, type:GLenum) => {
  // texture を初期化する感じのアレ
  const texture = gl.createTexture();

  gl.bindTexture(gl.TEXTURE_2D, texture);

  // A two-dimensional texture.
  // texParameteri(target: GLenum, pname: GLenum, param: GLint): void;
  // The pname parameter is a Glenum specifying the texture parameter to set.
  // The param parameter is a GLfloat or GLint specifying the value for the specified parameter pname.
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  // specifies a two-dimensional texture image.
  // texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void;
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFormat, 4, 4, 0, format, type, null);

  // method of the WebGL API creates and initializes a WebGLFramebuffer object.
  // WebGLFrameBuffer オブジェクトは何をするのか？
  // これ単品ではなんも意味がないオブジェクトらしい
  const fbo = gl.createFramebuffer() || (() => { throw Error('WebGLFramgeBuffer is null!'); })();

  // gl.FRAMEBUFFER: Collection buffer data storage of color, alpha, depth and stencil buffers used to render an image.
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);

  // attaches a texture to a WebGLFramebuffer.
  // バッファを作ってそこにテクスチャをくっつける
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);

  const status: GLenum = gl.checkFramebufferStatus(gl.FRAMEBUFFER);
  return (status === gl.FRAMEBUFFER_COMPLETE);
};

function getSupportedFormat(gl: GLRenderingContext, internalFormat: GLint, format: GLenum, type: GLenum): {internalFormat: GLint, format: GLenum} {
  if (!supportRenderTextureFormat(gl, internalFormat, format, type)) {
    switch (internalFormat) {
      case gl.R16F:
        return getSupportedFormat(gl, gl.RG16F, gl.RG, type);
      case gl.RG16F:
        return getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, type);
      default:
        throw Error(`no such an gl.EXT_color_buffer_float ${internalFormat}`);
    }
  }

  return {
    internalFormat,
    format,
  };
}

export default function getWebGLContext(canvas: HTMLCanvasElement) {
  const params = {
    alpha: false,
    depth: false,
    stencil: false,
    antialias: false,
  };

  // safari では WebGL2 が使えない
  // WebGL2RenderingContext 自体が存在しないので、instanceof とか動かそうとすると死ぬので注意
  let gl = canvas.getContext('webgl2', params);
  const isWebGL2 = !!gl;
  if (!isWebGL2) {
    gl = canvas.getContext('webgl', params) || canvas.getContext('experimental-webgl', params);
  }

  if (!gl) {
    throw Error('WebGL rendering context is null!.');
  }
  gl = gl as GLRenderingContext;

  let halfFloat;
  let supportLinearFiltering;
  if (isWebGL2) {
    gl.getExtension('EXT_color_buffer_float');
    supportLinearFiltering = gl.getExtension('OES_texture_float_linear');
  } else {
    halfFloat = gl.getExtension('OES_texture_half_float');
    supportLinearFiltering = gl.getExtension('OES_texture_half_float_linear');
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0);

  const halfFloatTexType = isWebGL2 ? gl.HALF_FLOAT : halfFloat.HALF_FLOAT_OES;
  let formatRGBA;
  let formatRG;
  let formatR;

  if (isWebGL2) {
    formatRGBA = getSupportedFormat(gl, gl.RGBA16F, gl.RGBA, halfFloatTexType);
    formatRG = getSupportedFormat(gl, gl.RG16F, gl.RG, halfFloatTexType);
    formatR = getSupportedFormat(gl, gl.R16F, gl.RED, halfFloatTexType);
  } else {
    formatRGBA = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    formatRG = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
    formatR = getSupportedFormat(gl, gl.RGBA, gl.RGBA, halfFloatTexType);
  }

  return {
    gl,
    ext: {
      formatRGBA,
      formatRG,
      formatR,
      halfFloatTexType,
      supportLinearFiltering,
    },
  };
}
