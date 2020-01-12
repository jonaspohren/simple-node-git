# Simple Node Git

```
yarn add https://github.com/jonaspohren/simple-node-git#0.1.0
```

```
const Git = require('simple-node-git')

Git.use('/home/myrepo')

Git.pull(['origin', 'master'])
  .then(({ stdout, stderr }) => console.log(stdout))
```