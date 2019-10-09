const gulp = require('gulp')
const babel = require('gulp-babel')

const source = gulp.src('./src/**/*.js')
const dist = gulp.dest('dist')

gulp.task('build', () => source
    .pipe(babel())
    .pipe(dist)
)