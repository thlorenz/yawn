# yawn
[![build status](https://secure.travis-ci.org/thlorenz/yawn.png)](http://travis-ci.org/thlorenz/yawn)

Super small wrapper around Node.js child_process.spawn, pretty boring actually.

```js
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


## License

MIT
