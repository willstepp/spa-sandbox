var gulp = require('gulp');

//run site
gulp.task('sandbox', function () {
  var express = require('express');

  var app = express();
  app.use(express.static(__dirname + '/app'));

  app.get('/', function(req, res) {
    res.render('index.html');
  });

  var server = app.listen(process.env.PORT || 8000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('angular sandbox listening at http://%s:%s', host, port);
  });
});

gulp.task('default', ['sandbox']);