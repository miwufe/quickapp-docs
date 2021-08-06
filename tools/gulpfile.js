/*
 * Copyright (C) 2018, hapjs.org. All rights reserved.
 */

const fs = require('fs-extra')
const path = require('path')
const execSync = require('child_process').execSync;
const gulp = require('gulp')
const zip = require('gulp-zip')
const del = require('del')

const root = path.join(__dirname,'..')

const docLists = [
  path.join(root,'guide-i18n/**/*'),
  path.join(root,'standard-i18n/public/**/*'),
  path.join(root,'tools/config/**/*')
]

const middle = path.join(root,'build/middle/')
const output = path.join(root,'docs/')

gulp.task('del',()=>{
  return del([middle,output],{force:true})
})

gulp.task('copy',()=>{
  return gulp.src(docLists)
    .pipe(gulp.dest(middle));
})

gulp.task('summary',(done)=>{
  const guide_path = path.join(root,'guide-i18n/index.en.md')
  const standard_path = path.join(root,'standard-i18n/public/index.en.md')
  const guide_content = fs.readFileSync(guide_path,{encoding:'utf-8'})
  const standard_content = fs.readFileSync(standard_path,{encoding:'utf-8'})
  fs.writeFileSync(middle+'SUMMARY.md', guide_content+standard_content);
  done()
});

gulp.task('build',(done)=>{
  execSync('gitbook install && gitbook build .',{cwd:middle,stdio:[0,1,2]})
  done()
})

gulp.task('zip', () =>{
  return gulp.src(`${middle}_book/**/*`)
      //.pipe(zip('doc.zip'))
      .pipe(gulp.dest(`${output}`))
})

gulp.task('default',gulp.series(['del','copy','summary','build','zip']))