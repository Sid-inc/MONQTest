const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleancss = require('gulp-clean-css');

function browsersync() {
  browserSync.init({
    server: { baseDir: './' },
    notify: false,
    online: true
  });
}

function scripts() {
  return src([
    'js/script.js'
  ])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(dest('js/'))
    .pipe(browserSync.stream());
}

function startwatch() {
  watch(['**/*.js', '!**/*.min.js'], scripts);
  watch('sass/**/*.scss', styles);
  watch('*.html').on('change', browserSync.reload);
}

function styles() {
  return src('sass/**/*.scss')
    .pipe(eval('sass')())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 2 versions'], grid: true }))
    .pipe(cleancss({ level: { 1: { specialComments: 0 } }, format: 'beautify' }))
    .pipe(dest('styles/'))
    .pipe(browserSync.stream());
}

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.default = parallel(styles, scripts, browsersync, startwatch);