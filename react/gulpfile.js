var gulp = require('gulp');
var concat = require('gulp-concat');
var react = require('gulp-react')

var libSource = [
  'bower_components/director/build/director.js',
  'bower_components/react/JSXTransformer.js',
  'bower_components/react/react.js'
];

var appSource = [
  'app/js/**/*.js',
  'build/transpiled/**/*.js'
];

gulp.task('transpile_jsx', function() {
  return gulp.src(['app/js/**/*.jsx'])
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('build/transpiled'));
});

//compile and minify
gulp.task('package', ['transpile_jsx'], function() {

  //comple sass
  gulp.src('app/css/*.css')
  .pipe(concat('app.css'))
  .pipe(gulp.dest('build'));

  //js compilation
  var allSource = libSource.concat(appSource);
  return gulp.src(allSource)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));
});


//run site
gulp.task('sandbox', function () {
  var express = require('express');

  var app = express();
  app.use(express.static(__dirname + '/sandbox'));
  app.use(express.static(__dirname + '/'));

  app.get('/', function(req, res) {
    res.render('index.html');
  });

  var server = app.listen(process.env.PORT || 8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('react sandbox listening at http://%s:%s', host, port);
  });
});

//run tasks whenever a lib file changes
gulp.task('watch', function() {
  gulp.watch(appSource.concat(['app/js/**/*.jsx', 'app/css/*.css', 'sandbox/index.html']), ['package']);
});

gulp.task('default', ['package', 'watch', 'sandbox']);