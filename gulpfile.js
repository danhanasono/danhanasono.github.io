//Requires
var gulp = require('gulp');
var sass = require('gulp-sass'); // Requires the gulp-sass plugin
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var del = require('del');
var bourbon = require('bourbon').includePaths;
var neat = require('bourbon-neat').includePaths;
var runSequence = require('run-sequence');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var ghPages = require('gulp-gh-pages');

//Variables
var input = './styles/scss/**/*.scss';
var output = './styles/css';
var markup = './**/*.+(html|php)';
var javascript = './**/*.js';
var autoprefixerOptions		= {
								browsers: [
									'last 2 versions',
									'> 5%',
									'Firefox ESR'
								]
							};

// Gulp task syntax
// gulp.task('hello', function() {
//   console.log('Hello Zell');
// });

// gulp.task('task-name', function () {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// })

gulp.task('sass', function() {
  return gulp
    .src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
  	.pipe(sourcemaps.init())
    .pipe(sass({
        includePaths: [].concat(bourbon, neat),
        errLogToConsole: true,
        outputStyle: 'expanded'
      })) // Sends it through a gulp plugin, in this case gulp-sass
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('app/css')) // Outputs the file in the destination folder, in this case the css folder
    .pipe(browserSync.reload({
      stream: true
    }))
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('static'))
});

gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  // Caching images that ran through imagemin
	.pipe(cache(imagemin({
        interlaced: true
      })))
  .pipe(gulp.dest('static/images'))
});

gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('static/fonts'))
})

gulp.task('pdfs', function() {
  return gulp.src('app/pdfs/**/*')
  .pipe(gulp.dest('static/pdfs'))
})

gulp.task('clean:static', function() {
  return del.sync('static');
})

gulp.task('cache:clear', function (callback) {
return cache.clearAll(callback)
})

// Run Sequence Syntax
// gulp.task('task-name', function(callback) {
//   runSequence('task-one', 'task-two', 'task-three', callback);
// });
gulp.task('build', function (callback) {
  runSequence('clean:static', 
    ['sass', 'fonts', 'pdfs','useref', 'images'],
    callback
  )
})

// Gulp watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 
// gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
//   // Other watchers
// })
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('default', function (callback) {
  runSequence(['sass','browserSync', 'watch'],
    callback
  )
})

gulp.task('deploy', function() {
  return gulp.src('./static/**/*')
    .pipe(ghPages());
});

