var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');

var emberTemplates = require('gulp-ember-templates');

var jsSource = [
  'app/app.js',
  'app/controllers/**/*.js',
  'app/models/**/*.js',
  'app/routes/**/*.js',
  'app/views/**/*.js',
  'app/services/**/*.js',
  'build/templates.js'
];

//compile and minify
gulp.task('package', ['templates'], function() {

  //html
  gulp.src('app/index.html')
  .pipe(gulp.dest('build'));

  //css
  gulp.src('app/styles/*.css')
  .pipe(concat('app.css'))
  .pipe(gulp.dest('build'));

  //js
  return gulp.src(jsSource)
    .pipe(concat('app.js'))
    .pipe(gulp.dest('build'));

});

gulp.task('templates', function(){
  return gulp.src('app/templates/**/*.hbs')
    .pipe(emberTemplates({
      compiler:require('./bower_components/ember/ember-template-compiler'),
      isHTMLBars:true
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build'));
});

//run sandbox site
gulp.task('sandbox', function () {
  var express = require('express');

  var app = express();
  app.use(express.static(__dirname + '/build'));
  app.use(express.static(__dirname + '/'));

  app.get('/', function(req, res) {
    res.render('index.html');
  });

  var server = app.listen(process.env.PORT || 8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('sandbox listening at http://localhost:%s', port);
  });
});

//run tasks whenever a lib file changes
gulp.task('watch', function() {
  gulp.watch(['app/**/*.js', 'app/index.html', 'app/styles/*.css'], ['package']);
});

//default task, used in development
gulp.task('default', ['package', 'sandbox', 'watch']);
