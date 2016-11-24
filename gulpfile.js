let gulp = require('gulp')
const cfg = require('./atoms')
const seq = require('run-sequence')
gulp = require('gulp-atoms')(gulp, cfg)

// dev pipeline
const dev = [
  'ac:clean',
  ['ac:copy:idx', 'ac:sass'],
  ['ac:copy:idx:watch', 'ac:sass:watch', 'ac:bundle:watch'],
  'ac:serve'
]

// build pipeline
const build = [
  'ac:clean',
  ['ac:copy:idx', 'ac:sass', 'ac:bundle']
]

gulp
  .task('dev', cb => seq.apply(seq, dev.concat(cb)))
  .task('build', cb => seq.apply(seq, build.concat(cb)))
