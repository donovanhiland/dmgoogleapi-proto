import gulp from 'gulp';
import plumber from 'gulp-plumber';
import watch from 'gulp-watch';
import babel from 'gulp-babel';
// import concat from 'gulp-concat';
// import annotate from 'gulp-ng-annotate';
// import uglify from 'gulp-uglify';
// import sass from 'gulp-sass';

const paths = {
  serverSource: ['./server/**/*.js'],
  // jsSource: ['./public/app/**/*.js', '!/public/bundle.js'],
  // sassSource: ['./public/assets/styles/**/*.scss']
};

// gulp.task('js', () =>  {
//   return gulp.src(paths.jsSource)
//   .pipe(plumber())
//   .pipe(babel({
//     presets: ["es2015"]
//   }))
//   .pipe(concat('bundle.js'))
//   .pipe(annotate())
//   .pipe(gulp.dest('./public'));
// });

// gulp.task('styles', () => {
//   return gulp.src(paths.sassSource)
//   .pipe(sass().on('error', sass.logError))
//   .pipe(concat('style.css'))
//   .pipe(gulp.dest('./public/assets/styles'));
// });

gulp.task('server', () => {
  return gulp.src(paths.serverSource)
  .pipe(plumber())
  .pipe(babel({
    presets: ["es2015"]
  }))
  .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () =>  {
  gulp.watch(paths.serverSource, ['server']);
  // gulp.watch(paths.jsSource, ['js']);
  // gulp.watch(paths.sassSource, ['styles']);
});

gulp.task('default', ['watch', 'server']);
