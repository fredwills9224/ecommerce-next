const purgecss = [
  "@fullhuman/postcss-purgecss",
  {
    content: ["./components/**/*.js", "./pages/**/*.js"],
    defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
  },
];

module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    ...(process.env.NODE_ENV === "production" ? [purgecss] : []),
  ],
};
  
  
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