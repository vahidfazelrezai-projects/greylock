// PACKAGES //
var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

// run node on the server file
gulp.task('runserver', function () {
    nodemon({script: 'bin/www'});
});

// compile sass files into compressed css file
gulp.task('sass', function () {
    gulp.src('client/assets/scss/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('client/assets/css'));
});

// watch for file changes while developing
gulp.task('watch', function () {
    gulp.watch('client/assets/scss/**/*.scss', ['sass']);
});

// start watching for file changes and run server
gulp.task('dev', ['watch', 'runserver']);

// default
gulp.task('default', ['dev']);
