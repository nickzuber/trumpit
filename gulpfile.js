
'use strict';

// JS modules
var gulp = require('gulp');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// CSS modules
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

// Concat and minify js files &&
// Compile sass files into css and minify
gulp.task('build', function(){
    gulp.src(['./modules/render.js'])
    .pipe(webpack({
        watch: false,
        module: {
            loaders: [
                { test: /\.jsx$/, loader: 'jsx-loader' },
            ],
        },
    }))

    // Minifying increases compile time so when developing
    // don't bother to minify so we can speed up builds
    //.pipe(uglify())

    .pipe(rename({
        basename: 'app',
        extname: '.bundle.js'
    }))
    .pipe(gulp.dest('./www/js/build'));

    // Default
    gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss())
    .pipe(gulp.dest('./www/css'));
});

// Compile sass files into css and minify
gulp.task('css', function(){
    // Default
    gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(uglifycss())
    .pipe(gulp.dest('./www/css'));
});

// set default
gulp.task('default', ['build']);