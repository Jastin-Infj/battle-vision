module.exports = {
  plugins: [
    require.resolve('tailwindcss'),
    // [
    //   'postcss-px-to-viewport-8-plugin',
    //   {
    //     unitToConvert: 'px',
    //     viewportWidth: 1920,
    //     viewportHeight: 1080,
    //     unitPrecision: 5,
    //     propList: ['*','!font*','!line*','!letter*','!min-*','!max-*'],
    //     viewportUnit: 'vw',
    //     fontViewportUnit: 'vw',
    //     mediaQuery: true,
    //     exclude: /node_modules/i
    //   }
    // ],
    // [
    //   'postcss-pxtorem',
    //   {
    //     rootValue: 16,
    //     unitPrecision: 5,
    //     propList: ['font*','line*', 'letter*'],
    //     mediaQuery: false,
    //     minPixelValue: 0,
    //     exclude: /node_modules/i
    //   }
    // ]
  ]
};