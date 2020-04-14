'use strict';

const gulp = require('gulp');
const build = require('@microsoft/sp-build-web');
build.addSuppression(`Warning - [sass] The local CSS class 'ms-Grid' is not camelCase and will not be type-safe.`);

build.tslint.enabled = false;
const externalsFolder = "external";

const copyStaticFilesSubtask = build.subTask('copy-static-files', function (gulp, buildOptions, done) {
  this.log('Copying static files...');

  gulp.src(`../${externalsFolder}/dist/*.{png,jpg,svg,gif,woff,eot,ttf}`)
  .pipe(gulp.dest("./dist"))
  .pipe(gulp.dest("./temp/deploy"));

  done();
});

build.rig.addPostBuildTask(copyStaticFilesSubtask);

build.initialize(gulp);
