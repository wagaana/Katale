const mix = require( 'laravel-mix' );
const crypto = require( 'crypto' );
const constants = require( 'constants' );


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js( 'resources/js/app.js', 'public/js' )
  .vue()
  .sass( 'resources/sass/app.scss', 'public/css' )
  .webpackConfig( {
    resolve: {
      fallback: {
        "crypto": require.resolve( "crypto-browserify" ),
        "stream": require.resolve( "stream-browserify" ),
        "constants": require.resolve( 'constants-browserify' ),
        "buffer": require.resolve( "buffer/" ),
        "util": require.resolve( "util/" ),
        "assert": require.resolve( "assert/" )
      }
    }
  } );