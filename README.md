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

### Connect Monogdb

> import mongoose and use mongoose

[Mongodb config](https://docs.mongodb.com/v3.4/installation/) <br>
[Operate the database](https://docs.mongodb.com/v3.4/reference/configuration-options/)

```shell
npm i mongoose --save

cd node-express
touch db.js
```

```js
const express = require('express')
const db = require('mongoose')

db.connect('mongodb://localhost/books_db', {useMongoClient: true})
db.Promise = promise
```

### Design Schema

```js
const Schema = db.Schema
const bookSchema = new Schema({
  title: String,
  img: String,
  link: String,
  price:String,
  author: String,
  publicsher: String
})

const Book = db.model('books', bookSchema)

module.exports = {
  Book: Book
}
```