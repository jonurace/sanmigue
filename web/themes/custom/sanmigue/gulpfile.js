const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const prefix = require('gulp-autoprefixer');
var babel = require('gulp-babel');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
var cp = require('child_process');

var paths = {
  styles: {
    src: 'scss/style.scss',
    dest: 'css'
  },
  scripts: {
    src: 'js/*.js',
    dest: 'js/build'
  },
  twig: {
    src: 'templates/*/*.twig'
  }
};

function live(){
  var files = [
    'templates/*/*.twig',
    'scss/*.scss'
  ];
  browserSync.init(files, {
    open: 'external',
    proxy: 'sanmi.ddev.site',
  });
}
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(paths.styles.dest));
}

function clean() {
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  //return del([ 'assets' ]);
}

function watch() {
  //gulp.watch(paths.scripts.src, scripts);
  live();
  gulp.watch(paths.styles.src, styles).on('change', browserSync.reload);
  gulp.watch(paths.twig.src, styles).on('change', browserSync.reload);
}

var build = gulp.series(styles);

//exports.clean = clean;
exports.styles = styles;
//exports.scripts = scripts;
exports.watch = watch;
exports.live = live;
exports.build = build;
exports.default = build;



