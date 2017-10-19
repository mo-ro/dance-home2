var gulp = require("gulp");
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");
var browser = require("browser-sync");
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
// var pug = require('gulp-pug');


gulp.task('html', function() {
  gulp.src(['./dev/src/**/*.html', '!./dev/src/**/_*.html'])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
  // .pipe(pug({
  //   pretty: true
  // }))
  .pipe(gulp.dest('./dev'))
  .pipe(gulp.dest('./dist'))
  .pipe(browser.reload({
    stream: true
  }))
});



gulp.task("sass", function() {
  gulp.src("./dev/src/style/**/*.scss")
    // .pipe(frontnote())
    .pipe(plumber({
      errorHandler: notify.onError("Error: <%= error.message %>")
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(gulp.dest("./dev/css"))
    .pipe(gulp.dest("./dist/css"))
    .pipe(browser.reload({
      stream: true
    }))
});

// gulp.task("default", function() {
//   gulp.watch(["./"], ["js"]);
//   gulp.watch("./dev/src/style/**/*scss", ["sass"]);
// });



gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./dev"
    }
  });
});
gulp.task("js", function() {
  gulp.src(["./dev/src/js/**/*js", "!js/min/**/*.js"])
  .pipe(plumber({
    errorHandler: notify.onError("Error: <%= error.message %>")
  }))
    // .pipe(uglify())
    .pipe(gulp.dest("./dev/js"))
    .pipe(gulp.dest("./dist/js"))
    .pipe(browser.reload({
      stream: true
    }))
});

// gulp.task('pug', () => {
// 	gulp.src([paths.rootDir + './dev/src/**/*.pug', '!' + paths.rootDir + './dev/src/**/_*.pug'])
// 		.pipe(plumber({
// 			errorHandler: notify.onError('Error: <%= error.message %>')
// 		}))
// 		.pipe(data(function(file) {
// 			const locals = JSON.parse(fs.readFileSync(paths.json + '/site.json'));
// 			locals.relativePath = path.relative(file.base, file.path.replace(/.pug$/, '.html'));
// 			return {
// 				'site': locals
// 			};
// 		}))
// 		.pipe(pug({
// 			pretty: '\t'
// 		}, {
// 			ext: '.html'
// 		}))
// 		.pipe(gulp.dest(paths.rootDir));
// });



gulp.task("default", ['server'], function() {
  gulp.watch(["./dev/src/js/**/*.js"], ["js"]);
  gulp.watch("./dev/src/style/**/*.scss", ["sass"]);
  gulp.watch("./dev/src/**/*html", ["html"]);
});