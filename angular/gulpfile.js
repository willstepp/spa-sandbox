var gulp = require('gulp');
var del = require('del');

var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var inlineTemplates = require('gulp-inline-angular-templates');

var libSource = [
  'bower_components/angular/angular.js',
  'bower_components/angular-route/angular-route.js',
  'bower_components/jquery/dist/jquery.js'
];

var appSource = [
  'app/js/*.js', 
  'app/js/controllers/*.js',
  'app/js/directives/*.js',
  'app/js/filters/*.js',
  'app/js/services/*.js',
];

var viewSource = [
  'app/views/*.html'
];

//js lint
gulp.task('lint', function() {
  var pack  = require('./package.json');
  return gulp.src(appSource)
    .pipe(jshint(pack.jshintConfig))
    .pipe(jshint.reporter('default'));
});

//clean build dir
gulp.task('clean', function () {
  var del = require('del');
  del(['dist/*.js', 'dist/*.html', 'dist/*.css']);
});

//compile and minify
gulp.task('package', function() {

  //1) inline views and copy html
  gulp.src(viewSource)
    .pipe(inlineTemplates('app/index.html', { base: 'app' }))
    .pipe(gulp.dest('dist'));

  //2) copy css
  gulp.src(['app/css/app.css']).pipe(gulp.dest('dist'));

  //3) js compilation
  return gulp.src(libSource.concat(appSource))
    .pipe(concat('app.js'))
    .pipe(gulp.dest('dist'));

    //to minify
    /*.pipe(rename('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));*/
});

//run tasks whenever a lib file changes
gulp.task('watch', function() {
  gulp.watch(appSource.concat(viewSource).concat(['app/index.html']), ['lint', 'clean', 'package']);
});

//run site
gulp.task('sandbox', function () {
  var express = require('express');

  var app = express();
  app.use(express.static(__dirname + '/dist'));

  app.get('/', function(req, res) {
    res.render('index.html');
  });

  var server = app.listen(process.env.PORT || 8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('angular sandbox listening at http://%s:%s', host, port);
  });
});

gulp.task('default', ['lint', 'clean', 'package', 'sandbox', 'watch']);