var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function (mix) {


    //Backend Package
    mix.copy('vendor/puresolcom/polyether/src/Backend/public', 'public/vendor/backend');
    mix.copy('vendor/puresolcom/polyether/src/Backend/resources/assets', 'resources/vendor/backend/assets');

    this.config.assetsPath = 'resources/vendor/backend/assets';
    mix.less('backend-bootstrap.less', 'public/vendor/backend/css');
    mix.less('backend-adminlte.less', 'public/vendor/backend/css');
    mix.sass('backend-styles.scss', 'public/vendor/backend/css');
});
