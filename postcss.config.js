module.exports = {

    plugins: [
        'postcss-imports',
        'tailwindcss',
        'autoprefixer'
    ],
    purge: {
        content: ['./src/**/*.html'],
        safelist: [
          'bg-accents-1',
          'flex-end',
          'flex'
        ]
    },

};

// just for testing!
// module.exports = {

//     plugins: [
//         require('tailwindcss'),
//         require('autoprefixer')
//     ]

// };