var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("./source/sass/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .pipe(gulp.dest("./source/css"));
});

gulp.task("sass:watch", function() {
  gulp.watch("./source/sass/**/*.scss", ["sass"]);
});
