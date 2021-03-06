'use strict';

var gulp = require('gulp'),
    useref = require('../index');

gulp.task('default', function () {
    return gulp.src('test/fixtures/bulk/useref.*.html')
        .pipe(useref())
        .pipe(gulp.dest('dest', { cwd: 'test' }));
});
