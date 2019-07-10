const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');

function compileCss(done) {
  return gulp
  .src("./*.scss")
  .pipe(plumber())
  .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
  .pipe(autoprefixer(['last 3 versions']))
  .pipe(gulp.dest("../"))
}

gulp.task("compileCss", compileCss);

// CSSファイルの変更を検知してcompileCssを実行
gulp.task("watch", function () {
  gulp.watch("./*.scss", gulp.task("compileCss"));
});

// 実行時にはcompileCssしてwatch
gulp.task("default", 
    gulp.series("compileCss", "watch")
);
