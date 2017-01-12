const gulp = require('gulp');
const jshint = require('gulp-jshint');
const clean = require('gulp-clean');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const minify = require('gulp-minify');
const watch = require('gulp-watch');
const es = require('event-stream');
const plumber = require('gulp-plumber');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();
const reload      = browserSync.reload;
const fs = require('fs');
const pkgJson = JSON.parse(fs.readFileSync('./package.json'));


const src = {
    js: './src/**/*.js',
    html: './example**/*.html',
    css: './example**/*.css'
};

// Browser Sync - Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./example",
          middleware: function (req, res, next) {
              res.setHeader('Access-Control-Allow-Origin', '*');
              next();
          }
        }
    });

    gulp.watch(src.html).on('change', reload);
    gulp.watch(src.css).on('change', reload);
    gulp.watch(src.js).on('change', reload);
});

// Clean Dist Dir
gulp.task('clean', function () {
	return gulp.src('dist/')
	.pipe(clean());
});

// - JavaScript Hint (Standard Codding)
gulp.task('jshint', function () {
	return watch('./src/**/*.js', function () {
		gulp.src('./src/**/*.js')
    .pipe(plumber())
		.pipe(jshint('./.jshintrc'))
		.pipe(jshint.reporter('jshint-stylish'));
	});
});

// - JavaScript Uflify Task
gulp.task('uglify', function () {
	return watch('./src/**/*.js', function () {
		es.merge([
			gulp.src(['src/**/*.js']).pipe(concat('scripts.js')).pipe(uglify())
		])
    .pipe(concat( pkgJson.name + '.js'))
      .pipe(minify({
          ext:{
              src:'.js',
              min:'.min.js'
          },
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
      }))
    .pipe(plumber())
    .pipe(gulp.dest('./example/js'))
		.pipe(gulp.dest('./dist/js'));
    browserSync.reload
  });
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch( './js/**/*.js' , ['jshint', 'uglify']);
});

gulp.task('default', function (cb) {
	return runSequence('clean', ['jshint', 'uglify', 'browser-sync'], cb)
});
