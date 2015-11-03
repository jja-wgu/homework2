var gulp = require('gulp');
var concatJs = require('gulp-concat');

gulp.task('js', function () {
	return gulp
		.src('app/**/*.js')
		.pipe(concatJs('all.js'))
		.pipe(gulp.dest('client-resources/'));
});

gulp.task('js-lib', function () {
	return gulp
		.src('lib/js/**/*.js')
		.pipe(concatJs('lib.js'))
		.pipe(gulp.dest('client-resources/'));
});

gulp.task('default', function() {
	gulp.watch('app/**/*.js', ['js']);
	gulp.watch('lib/js/**/*.js', ['js-lib']);
});