var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	kouto = require('kouto-swiss'),
	nib = require('nib'),
	jade = require('gulp-jade'),
	connect = require('gulp-connect');

var img = require('gulp-imagemin');

gulp.task('connect', function(){
	connect.server({
		root: 'dest',
		port: 3000,
		livereload: true
	});
});

gulp.task('styl', function(){
	gulp.src('./src/styl/index.styl')
		.pipe(stylus({
			use: [kouto(), nib()],
			compress: true
			}))
		.pipe(gulp.dest('./dest/'))
		.pipe(connect.reload());
});

gulp.task('html', function(){
	gulp.src('./src/jade/index.jade')
		.pipe(jade({
			pretty: false
		}))
		.pipe(gulp.dest('./dest/'))
		.pipe(connect.reload());
});

gulp.task('img', function(){
	var imgPath = './src/img/**/*';
	gulp.src(imgPath)
		.pipe(img({
			progressive: true
			}))
		.pipe(gulp.dest('./dest/img/'));
});

gulp.task('watch', function(){
	gulp.watch('./src/jade/**/*.jade', ['html']);
	gulp.watch('./src/styl/**/*.styl', ['styl']);
});

gulp.task('default', ['watch', 'connect']);