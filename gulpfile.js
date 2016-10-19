var gulp = require('gulp');
var Elixir = require('laravel-elixir');

require('laravel-elixir-webpack-official');
require('laravel-elixir-postcss');

Elixir.config.assetsPath = 'app';

Elixir(function(mix) {
  mix.copy('app/assets/', 'public/');

  mix.postcss('style.css', {
    srcDir: 'app/postcss/',
    output: 'public/css',
    plugins: [
      require('precss')
    ]
  });

  mix.webpack('app.js', 'public/js/script.js');

  mix.browserSync({
    server: 'public',
    proxy: false,
    files: [
      'public/css/*.css',
      'public/js/*.js',
      'app/assets/*.html'
    ]
  });
});
