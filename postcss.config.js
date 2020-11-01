const purgecss = [
  '@fullhuman/postcss-purgecss',
  {
    content: ['./src/**/*.html', './src/**/*.tsx', './src/**/*.jsx', './src/**/*.scss', './src/**/*.css'],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss',
    'autoprefixer',
    purgecss,
  ],
};
