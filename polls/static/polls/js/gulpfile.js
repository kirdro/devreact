var gulp = require('gulp');
var livereload = require('gulp-livereload');
var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

gulp.task('browserify', function() {
	gulp.src('src/js/main.js')
	.pipe(browserify({transform:'reactify'}))
	.pipe(concat('main.js'))
	.pipe(gulp.dest('dist/js'))
	.pipe(livereload());
});

gulp.task('copy', function() {
    gulp.src('src/index.html')
      .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
	gulp.run('browserify', 'copy');

	gulp.watch('src/**/*.*', function(event) {
		gulp.run('script');
	});
});
