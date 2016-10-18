// See http://brunch.io for documentation.
module.exports = {
  files: {
    javascripts: {
      joinTo: 'js/script.js'
    },
    stylesheets: {
      joinTo: 'css/style.css'
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  plugins: {
    babel: {
      presets: ['es2015', 'es2016'],
      ignore: [
        /^(bower_components|vendor)/,
      ],
      pattern: /\.(es6|jsx)$/
    },
    postcss: {
      processors: [
        require('precss'),
        require('autoprefixer')(['last 2 versions'])
      ]
    }
  }
}
