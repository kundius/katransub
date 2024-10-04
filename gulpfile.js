const { src, dest, parallel, watch, series } = require('gulp')
const babel = require('gulp-babel')
const browserify = require('browserify')
const log = require('gulplog')
const tap = require('gulp-tap')
const buffer = require('gulp-buffer')
const sourcemaps = require('gulp-sourcemaps')
const sass = require('gulp-sass')(require('sass'))
const postcss = require('gulp-postcss')
const autoprefixer = require('autoprefixer')
const cssnano = require('cssnano')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')

const config = {
  srcDir: './src/'
}

function fonts() {
  return src([config.srcDir + 'fonts/**/*', './node_modules/uikit/dist/fonts/**/*']).pipe(
    dest('dist/fonts')
  )
}

function images() {
  return (
    src([config.srcDir + 'img/**/*'])
      //.pipe(imagemin())
      .pipe(dest('dist/img'))
  )
}

function css() {
  return src([
    config.srcDir + 'fonts/Rubik/stylesheet.css',
    './node_modules/normalize.css/normalize.css',
    './node_modules/tippy.js/dist/tippy.css',
    './node_modules/tippy.js/themes/light.css',
    './node_modules/slick-carousel/slick/slick.css',
    './node_modules/choices.js/public/assets/styles/choices.min.css',
    './node_modules/autocompleter/autocomplete.css',
    './node_modules/swiper/swiper-bundle.min.css',
    config.srcDir + 'css/mobilemenu.css',
    config.srcDir + 'scss/styles.scss'
  ])
    .pipe(sass())
    .pipe(concat('all.css'))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest('dist/css'))
}

function js() {
  return src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery-migrate/dist/jquery-migrate.min.js',
    './node_modules/uikit/dist/js/uikit.min.js',
    './node_modules/uikit/dist/js/components/sticky.min.js',
    './node_modules/uikit/dist/js/components/notify.min.js',
    './node_modules/slick-carousel/slick/slick.min.js',
    './node_modules/choices.js/public/assets/scripts/choices.min.js',
    './node_modules/autocompleter/autocomplete.js',
    './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
    './node_modules/jquery-form/dist/jquery.form.min.js',
    './node_modules/jquery-validation/dist/jquery.validate.min.js',
    './node_modules/jquery-validation/dist/localization/messages_ru.min.js',
    config.srcDir + 'js/mobilemenu.js',
    config.srcDir + 'js/main.js'
  ])
    .pipe(
      babel({
        presets: ['@babel/env']
      })
    )
    .pipe(concat('all.js'))
    .pipe(dest('dist/js'))
}

function browserifyJs() {
  return (
    src(config.srcDir + 'js/browserify.js')
      .pipe(
        tap(function (file) {
          log.info('bundling ' + file.path)
          // replace file contents with browserify's bundle stream
          file.contents = browserify(file.path, { debug: true }).bundle()
        })
      )
      // transform streaming contents into buffer contents (because gulp-sourcemaps does not support streaming contents)
      .pipe(buffer())
      // load and init sourcemaps
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify())
      // write sourcemaps
      .pipe(sourcemaps.write('./'))
      // .pipe(concat('all.js'))
      .pipe(dest('dist/js'))
  )
}

function modx() {
  return src([
    config.srcDir + 'js/ajaxform.js',
    config.srcDir + 'js/minishop2.js',
    config.srcDir + 'js/mslistorders.js',
    config.srcDir + 'js/tickets.js'
  ]).pipe(dest('dist/js'))
}

exports.fonts = fonts
exports.images = images
exports.js = js
exports.browserifyJs = browserifyJs
exports.css = css
exports.modx = modx
exports.build = parallel(fonts, images, css, js, browserifyJs, modx)
exports.default = function () {
  watch(config.srcDir + 'scss/**/*', css)
  watch(config.srcDir + 'css/**/*', css)
  watch(config.srcDir + 'js/**/*', parallel(js, browserifyJs))
  watch(config.srcDir + 'fonts/**/*', fonts)
  watch(config.srcDir + 'img/**/*', images)
}
