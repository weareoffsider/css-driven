var gulp         = require('gulp'),
    less         = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    jade         = require('gulp-jade'),
    concat       = require('gulp-concat'),
    rimraf       = require('gulp-rimraf'),
    pixrem       = require('gulp-pixrem'),
    rename       = require('gulp-rename'),
    connect      = require('gulp-connect'),
    browserify   = require('gulp-browserify'),
    uglify       = require('gulp-uglifyjs'),
    envify       = require('envify/custom'),
    gutil        = require('gulp-util');


// Load toolkit's functions into Less.
var toolkit = require("toolkit-less-css");
var lessc = require("gulp-less/node_modules/less");
toolkit.loadFunctions(lessc);

var PATHS = {
  "test": "./test",
  "testOut": "./tmp/test",
  "src": "./src",
  "srcOut": "./tmp/build",
  "distOut": "./dist",
};


// CORE TASKS
gulp.task("scripts", function() {
  gulp.src(PATHS.src + "/main.js")
      .pipe(browserify({
        debug: true
      })
      .on('prebundle', function(bundle) {
        bundle.transform(envify({
          NODE_ENV: "development"
        }));
      }))
      .pipe(rename("css-driven.js"))
      .pipe(gulp.dest(PATHS.srcOut))
      .pipe(gulp.dest(PATHS.distOut))
      .pipe(gulp.dest(PATHS.testOut))
      .pipe(connect.reload());
});



// BUILD TASKS
gulp.task("build", function() {
  gulp.src(PATHS.src + "/main.js")
      .pipe(browserify({
        ignore: "debug.js"
      })
      .on('prebundle', function(bundle) {
        bundle.transform(envify({
          NODE_ENV: "production"
        }));
      }))
      .pipe(uglify())
      .pipe(rename("css-driven.min.js"))
      .pipe(gulp.dest(PATHS.distOut))
      .pipe(gulp.dest(PATHS.testOut))
      .pipe(connect.reload());
});



// TESTING TASKS
gulp.task('test:less', function() {
  return gulp.src(PATHS.test + '/app.less')
    .pipe(less()).on('error', gutil.log)
    .pipe(autoprefixer()) // Note: by default, Autoprefixer uses `> 1%, last 2 versions, Firefox ESR, Opera 12.1`
    .pipe(pixrem())
    .pipe(gulp.dest(PATHS.testOut))
    .pipe(connect.reload());
});


gulp.task('test:js', function() {
  return gulp.src(PATHS.test + '/app.js')
    .pipe(gulp.dest(PATHS.testOut))
    .pipe(connect.reload());
});

gulp.task('test:jade', function() {
  return gulp.src(PATHS.test + '/*.jade')
    .pipe(jade({
        pretty: true,
        basedir: PATHS.test
    })).on('error', gutil.log)
    .pipe(gulp.dest(PATHS.testOut))
    .pipe(connect.reload());
});


gulp.task('test:clean', function() {
  return gulp.src(PATHS.testOut + '/*', { read: false })
    .pipe(rimraf());
});


gulp.task('test', function() {
  gulp.watch(PATHS.test + '/**/*.less', ['test:less']);
  gulp.watch(PATHS.test + '/**/*.js', ['test:js']);
  gulp.watch(PATHS.src + '/**/*.js', ['scripts']);
  gulp.watch(PATHS.test + '/**/*.jade', ['test:jade']);

  connect.server({
    root: PATHS.testOut,
    livereload: true
  });
});


// $ gulp

gulp.task('default', ['test:clean'], function() {
  gulp.start( 'test:less', 'scripts', 'test:jade', 'test:js', 'test');
});
