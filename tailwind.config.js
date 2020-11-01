module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: {
    layers: ['utilities'],
    content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx', './src/**/*.scss', './src/**/*.css'],
  },
  variants: {},
  plugins: [],
};
