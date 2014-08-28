'use strict';
/*jshint asi: true */

var test = require('tap').test
var yawn = require('../')

test('\nexecuting ls -la tracking stdout without callback', function (t) {
  try {
    yawn('ls', [ '-la' ], { trackStdout: true })
    t.fail('should have failed');
  } catch (err) {
    t.similar(err, /no sense in tracking stdout/, 'throws error letting user know that tracking stdout without a callback is senseless');
  }
  t.end()
})

test('\nexecuting ls -la tracking stdout with callback', function (t) {
  t.plan(3)

  var bufs = [], err;
  function onerror(err_) { err_ = err }
  function ondata(d) { bufs.push(d) }

  var ps = yawn('ls', [ '-la' ], { trackStdout: true }, oncb)
  ps.on('error', onerror)
    .on('close', onclose)

  ps.stdout.on('data', ondata)

  function onclose() {
    t.pass('process closes')
  }

  function oncb(err_, res) {
    if (err) { t.fail(err); return t.end(); }
    if (err_) { t.fail(err_); return t.end(); }
    
    var stdoutLines = Buffer.concat(bufs).toString().split('\n')
      , resLines = res.toString().split('\n')

    t.ok(resLines.length >= 5, 'lists at least 5 entries')
    t.deepEqual(resLines, stdoutLines, 'callback returns same buffer collected on stdout')
  }
})

test('\nexecuting invalid command', function (t) {
  t.plan(2)

  var bufs = [], err;
  function onerror(err_) { err_ = err }
  function ondata(d) { bufs.push(d) }

  var ps = yawn('l', [ '-la' ], { trackStdout: true }, oncb)
  ps.on('error', onerror)
    .on('close', onclose)

  ps.stdout.on('data', ondata)

  function onclose() {
    t.pass('process closes')
  }

  function oncb(err, res) {
    t.similar(err, /returned with code -1/, 'calls back with an error')
  }
})
