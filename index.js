'use strict';
var spawn = require('child_process').spawn;

module.exports = 

/**
 * Runs the given command with the provided options.
 *
 * **WARNING:** when `trackStdout` is set, the output of the process is buffered which may lead to large amount of memory usage
 * 
 * @name yawn
 * @function
 * @param {string} command command to run, i.e. `ls`
 * @param {Array.<string>} argv arguments to pass to `child_process.spawn`, i.e. `-la`
 * @param {Object} opts options passed to `child_process.spawn`
 * @param {boolean} opts.trackStderr if `true`, the given callback is invoked with an error whenever any output into `stderr` is encountered (default: false)
 * @param {boolean} opts.trackStdout if `true`, the given callback is invoked with the data piped to `stdout` **as a Buffer** when the process is finished (default: false)
 * @param {function} cb (optional), if supplied it is invoked when processed finished
 * @return {Object} the spawned process
 */
function yawn(command, argv, opts, cb) {
  if (typeof opts === 'function') {
    cb = opts;
    opts = null;
  }

  opts = opts || {};
  if (opts.trackStdout && !cb) throw new Error('No sense in tracking stdout when no callback is supplied!');

  var ps = spawn(command, argv, opts)
  var bufs = []; 

  function onerror(err) {
    if (cb) cb(err);
  }

  function ondata(buf) {
    bufs.push(buf);
  }

  function onclose(code) {
    if (code) return onerror(new Error(' returned with code ' + code));
    if (!opts.trackStdout) return cb && cb();

    var buf = Buffer.concat(bufs);
    if (cb) cb(null, buf);
  }

  if (opts.trackStderr) ps.stderr.on('data', onerror);  
  if (opts.trackStdout) ps.stdout.on('data', ondata);

  ps.on('close', onclose);
  return ps;
}
