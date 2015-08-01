var gulp = require('gulp');
var less = require('gulp-less');
var csso = require('gulp-csso');
var autoprefixer = require('gulp-autoprefixer');
var qsh = require('qsh-resource');
var htmlmin = require('gulp-htmlmin');

gulp.task('less', function(){
    return gulp.src('./css/**/*.less')
        .pipe(less())
        .pipe(autoprefixer({
            browsers: ['last 20 versions'],
            cascade: false
        }))
        .pipe(csso())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('copy:html', function(){
    return gulp.src('./head.html')
        .pipe(qsh())
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('copy:font', function(){
    return gulp.src('./font/**/*')
        .pipe(gulp.dest('./dist/font'));
});

gulp.task('copy:js', function(){
    return gulp.src('./js/**/*')
        .pipe(gulp.dest('./dist/js'));
});

var connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'dist'
    });
});

gulp.task('copy', ['copy:html', 'copy:font', 'copy:js']);

gulp.task('default', ['less', 'copy']);