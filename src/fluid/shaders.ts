import advectionManualFiltering from 'src/shader/fluid/advection-manual-filtering.frag';
import advection from 'src/shader/fluid/advection.frag';
import clear from 'src/shader/fluid/clear.frag';
import curl from 'src/shader/fluid/curl.frag';
import display from 'src/shader/fluid/display.frag';
import divergence from 'src/shader/fluid/divergence.frag';
import gradientSubtract from 'src/shader/fluid/gradient-subtract.frag';
import pressure from 'src/shader/fluid/pressure.frag';
import splat from 'src/shader/fluid/splat.frag';
import vert from 'src/shader/fluid/vert.vert';
import vorticity from 'src/shader/fluid/vorticity.frag';

export default {
  advectionManualFiltering,
  advection,
  clear,
  curl,
  display,
  divergence,
  gradientSubtract,
  pressure,
  splat,
  vert,
  vorticity,
};
