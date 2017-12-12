# Nodejs

## Init Project

```bash
mkdir node-express
npm init
```

## Install Dependencies
```
npm i express body-parser --save
```


## Start File

```bash
cd node-express
touch app.js
cd app.js
```

## Basic Server
```js
const express = require('express')
const app = express()

app.listen(3333, () => {
  console.log(`the server is running prot: 3333.....`)
})
```

> excuting shell
```shell
node app

// The terminal can see the console
```