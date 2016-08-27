var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  watch = require('gulp-watch'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  rimraf = require('rimraf'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  rigger = require('gulp-rigger'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  imagemin = require('gulp-imagemin');
var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: {
    html: 'src/**/*.html',
    js: 'src/js/*.js',
    json: 'src/js/*.json',
    style: 'src/css/style.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js*',
    style: 'src/css/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};
var config = {
  server: {
    baseDir: './build'
  }
};
gulp.task('html:build', function() {
  gulp.src(path.src.html)
    .pipe(gulp.dest(path.build.html))
    .pipe(reload({
      stream: true
    }));
});
gulp.task('js:build', function() {
  gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(rigger())
    // .pipe(sourcemaps.init())
    // .pipe(uglify())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    // .pipe(reload({
    //   stream: true
    // }));

    gulp.src(path.src.json)
    .pipe(plumber())
    // .pipe(rigger())
    // .pipe(sourcemaps.init())
    // .pipe(uglify())
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
    .pipe(reload({
      stream: true
    }));
});
gulp.task('json:build', function () {

});
gulp.task('style:build', function() {
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sass())
    // .pipe(sourcemaps.init())
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 8'],
      cascade: false
    }))
    // .pipe(cleanCSS({compatibility: 'ie8'}))
    // .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
    .pipe(reload({
      stream: true
    }));
});
gulp.task('image:build', function() {
  gulp.src(path.src.img)
    .pipe(imagemin({
      plugins: [imagemin.jpegtran(), imagemin.optipng()],
      verbose: true
    }))
    .pipe(gulp.dest(path.build.img))
    .pipe(reload({
      stream: true
    }));
});
// gulp.task('sprite:build', function () {
//     var spriteData =
//     gulp.src(path.src.sprite)
//         .pipe(spritesmith({
//               imgName: 'ico_sprite_users.png',
//               cssName: '_sprite.scss',
//               cssFormat: 'sass',
//               algorithm: 'left-right',
//               padding: 1
//             }));
//         spriteData.img.pipe(gulp.dest(path.build.sprite));
//         spriteData.css.pipe(gulp.dest(path.build.spriteCss));
// });
gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts));
});
gulp.task('build', [
  'html:build',
  'js:build',
  // 'json:build',
  'style:build',
  'fonts:build',
  'image:build'
]);
gulp.task('watch', function() {
  watch([path.watch.html], function(event, cb) {
    gulp.start('html:build');
  });
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
  watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
    // gulp.start('json:build');
  });
  watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
  watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });
});
gulp.task('webserver', function() {
  browserSync.init(config);
});
gulp.task('clean', function(cb) {
  rimraf(path.clean, cb);
});
gulp.task('default', ['build', 'webserver', 'watch']);
