var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	jade = require('gulp-jade'),
	connect = require('gulp-connect');

gulp.task('connect', function(){
	connect.server({
		root: 'dest',
		port: 3000,
		livereload: true
	});
});

gulp.task('html', function(){
	gulp.src('./src/jade/index.jade')
		.pipe(jade({
			pretty: false
		}))
		.pipe(gulp.dest('./dest/'))
		.pipe(connect.reload());
});

gulp.task('watch', function(){
	gulp.watch('./src/jade/**/*.jade', ['html']);
});

gulp.task('default', ['watch', 'connect']);