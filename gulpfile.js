// links all the packages to the gulp task file, "this file"
var gulp = require('gulp'),
browserify = require('browserify'),
source = require('vinyl-source-stream'),
concat = require('gulp-concat'),
uglify = require('gulp-uglify'),
utilities = require('gulp-util'),
jshint = require('gulp-jshint'),
del = require('del'),
lib = require('bower-files')({
  "overrides":{
    "bootstrap" : {
      "main": [
        "less/bootstrap.less",
        "dist/css/bootstrap.css",
        "dist/js/bootstrap.js"
      ]
    }
  }
}),
browserSync = require('browser-sync').create(),
buildProduction = utilities.env.production,
babelify = require("babelify");

//
//
//
//
//
//
//
//#####################################
// css stuff
//this builds our css file and puts it in the build folder

gulp.task("cssBuild", function() { //function for our css grab task
  gulp.src(['css/*.css']) //grab all the .css filse in the css folder
  .pipe(concat('vendor.css')) //makes a .css files to put css stuff in
  .pipe(gulp.dest('./build/css')) //makes a folder to put our new css file in
});

gulp.task('bowerCSS', function () { //function for our css build task
  return gulp.src(lib.ext('css').files) //grab all the .css filse that bower install
  .pipe(concat('vendor.css')) //contat them all togethor
  .pipe(gulp.dest('./build/css')); //plays it in the build/css
});

//#####################################
//
//
//
//
//
//
//






//
//
//
//
//
//
//
//#####################################
// run tasks

gulp.task('bower', ['bowerJS', 'bowerCSS']); // runs our js build and our css build

//#####################################
//
//
//
//
//
//
//



//
//
//
//
//
//
//
//#####################################
// js build task
gulp.task('bowerJS', function () { // function start
  return gulp.src(lib.ext('js').files)//grab all the .js that bower install and concat them in the build/js folder
  .pipe(concat('vendor.min.js')) // contat the files together
  .pipe(uglify()) //make them samll
  .pipe(gulp.dest('./build/js')); // playes them in the build/js file for the html
});

//#####################################
//
//
//
//
//
//
//













gulp.task("clean", function(){
  return del(['build', 'tmp']);
});

gulp.task('concatInterface', function(){
  return gulp.src(['js/*-ui.js'])
    .pipe(concat('allConcat.js'))
    .pipe(gulp.dest('./tmp'));
});

gulp.task('jsBrowserify', ['concatInterface'], function() {
  return browserify({ entries: ['./tmp/allConcat.js']})
    .transform(babelify.configure({
      presets: ["es2015"]
    }))
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('./build/js'))
});

gulp.task('minifyScripts', ['jsBrowserify'], function() {
  return gulp.src('build/js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('./build/js'));
});

gulp.task('build', ['clean'], function(){
  if (buildProduction) {
    gulp.start('minifyScripts');
  } else {
    gulp.start('jsBrowserify');
  }
  gulp.start('bower');
});

gulp.task('jshint', function(){
  return gulp.src(['js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });

  gulp.watch(['js/*.js'], ['jsBuild']);
  gulp.watch(['bower.json'], ['bowerBuild']);
});

gulp.task('jsBuild', ['jsBrowserify', 'jshint'], function(){
  browserSync.reload();
});

gulp.task('bowerBuild', ['bower'], function(){
  browserSync.reload();
});






//
//
//
//
//
//
//
//#####################################
//

//#####################################
//
//
//
//
//
//
//
