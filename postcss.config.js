module.exports = {
    plugins: {
      'postcss-flexbugs-fixes': {},
      'postcss-preset-env': {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'custom-properties': true,
          'nesting-rules': true,
        },
      },
    },
  }
// workin with problems
    // module.exports = {

    //     plugins: [
    //         'tailwindcss',
    //         'postcss-nesting',
    //         'autoprefixer'
    //     ]

    // };
// workin with problems

// just for testing!
// module.exports = {

//     plugins: [
//         require('tailwindcss'),
//         require('autoprefixer')
//     ]

// };