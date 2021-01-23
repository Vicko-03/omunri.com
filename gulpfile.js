const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(sass({
      outputStyle: "expanded",
      includePaths: "./node_modules",
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))    
    .pipe(gulp.dest("./css"))
}

// Watch files
function watchFiles() {
  gulp.watch("./scss/**/*", css);
}

exports.css = css;
exports.default = gulp.series(css, watchFiles);