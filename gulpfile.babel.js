import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';

const path = {
    sass: './source/scss',
    css: './source/css'
};

const config = {
    sass: {
        outputStyle: 'compressed'
    }
};

gulp.task('sass', function() {
    return gulp.src(`${path.sass}/*.scss`)
        .pipe(sass(config.sass))
        .pipe(autoprefixer())
        .pipe(gulp.dest(path.css));
});

gulp.task('default', ['sass'], function() {
    gulp.watch(`.${path.sass}/_partial/*.scss`, ['sass']);
    gulp.watch(`.${path.sass}/*.scss`, ['sass']);
});