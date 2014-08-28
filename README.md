# yawn [![build status](https://secure.travis-ci.org/thlorenz/yawn.png)](http://travis-ci.org/thlorenz/yawn)

Super small wrapper around Node.js child_process.spawn, pretty boring actually.

![yawn](https://github.com/thlorenz/yawn/blob/master/assets/yawn.jpg)

```js
var yawn = require('yawn');

yawn('ls', [ '-la' ], { trackStdout: true } , function (err, res) {
  if (err) return console.error(err);
  // res is a Buffer
  console.log('Result', res.toString());    
})
```

```
Result total 48
drwxr-xr-x   11 thlorenz  staff   374 Aug 27 20:27 .
drwxr-xr-x  105 thlorenz  staff  3570 Aug 27 20:15 ..
drwxr-xr-x   13 thlorenz  staff   442 Aug 27 20:16 .git
-rw-r--r--    1 thlorenz  staff    97 Aug 27 20:16 .gitignore
-rw-r--r--    1 thlorenz  staff    48 Aug 27 20:16 .travis.yml
-rw-r--r--    1 thlorenz  staff  1078 Aug 27 20:16 LICENSE
-rw-r--r--    1 thlorenz  staff   318 Aug 27 20:54 README.md
-rw-r--r--    1 thlorenz  staff  1896 Aug 27 20:54 index.js
drwxr-xr-x    4 thlorenz  staff   136 Aug 27 20:27 node_modules
-rw-r--r--    1 thlorenz  staff   774 Aug 27 20:17 package.json
drwxr-xr-x    3 thlorenz  staff   102 Aug 27 20:16 test
```

## Installation

    npm install yawn

## API

<!-- START docme generated API please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN docme TO UPDATE -->

<div>
<div class="jsdoc-githubify">
<section>
<article>
<div class="container-overview">
<dl class="details">
</dl>
</div>
<dl>
<dt>
<h4 class="name" id="yawn"><span class="type-signature"></span>yawn<span class="signature">(command, argv, opts, cb)</span><span class="type-signature"> &rarr; {Object}</span></h4>
</dt>
<dd>
<div class="description">
<p>Runs the given command with the provided options.</p>
<p><strong>WARNING:</strong> when <code>trackStdout</code> is set, the output of the process is buffered which may lead to large amount of memory usage</p>
</div>
<h5>Parameters:</h5>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>command</code></td>
<td class="type">
<span class="param-type">string</span>
</td>
<td class="description last"><p>command to run, i.e. <code>ls</code></p></td>
</tr>
<tr>
<td class="name"><code>argv</code></td>
<td class="type">
<span class="param-type">Array.&lt;string></span>
</td>
<td class="description last"><p>arguments to pass to <code>child_process.spawn</code>, i.e. <code>-la</code></p></td>
</tr>
<tr>
<td class="name"><code>opts</code></td>
<td class="type">
<span class="param-type">Object</span>
</td>
<td class="description last"><p>options passed to <code>child_process.spawn</code></p>
<h6>Properties</h6>
<table class="params">
<thead>
<tr>
<th>Name</th>
<th>Type</th>
<th class="last">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td class="name"><code>trackStderr</code></td>
<td class="type">
<span class="param-type">boolean</span>
</td>
<td class="description last"><p>if <code>true</code>, the given callback is invoked with an error whenever any output into <code>stderr</code> is encountered (default: false)</p></td>
</tr>
<tr>
<td class="name"><code>trackStdout</code></td>
<td class="type">
<span class="param-type">boolean</span>
</td>
<td class="description last"><p>if <code>true</code>, the given callback is invoked with the data piped to <code>stdout</code> <strong>as a Buffer</strong> when the process is finished (default: false)</p></td>
</tr>
</tbody>
</table>
</td>
</tr>
<tr>
<td class="name"><code>cb</code></td>
<td class="type">
<span class="param-type">function</span>
</td>
<td class="description last"><p>(optional), if supplied it is invoked when processed finished</p></td>
</tr>
</tbody>
</table>
<dl class="details">
<dt class="tag-source">Source:</dt>
<dd class="tag-source"><ul class="dummy">
<li>
<a href="https://github.com/thlorenz/yawn/blob/master/index.js">index.js</a>
<span>, </span>
<a href="https://github.com/thlorenz/yawn/blob/master/index.js#L6">lineno 6</a>
</li>
</ul></dd>
</dl>
<h5>Returns:</h5>
<div class="param-desc">
<p>the spawned process</p>
</div>
<dl>
<dt>
Type
</dt>
<dd>
<span class="param-type">Object</span>
</dd>
</dl>
</dd>
</dl>
</article>
</section>
</div>

*generated with [docme](https://github.com/thlorenz/docme)*
</div>
<!-- END docme generated API please keep comment here to allow auto update -->

## License

MIT
