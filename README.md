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
  console.log(`the server is running port: 3333.....`)
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
db.Promise = Promise
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

### Setting Routes

```shell
cd node-express
mkdir routes
cd routes && touch books.js
```

app.js
> The routes direction correspond file

```js
app.get('/books/', require('./routes/books'))
```

### Router

```js
/**
 * import express db
 * get_data interface
 */
const express = require('express')
const router = express.Router()
const db = require('../db')
const Book = db.Book

// This interface should have page and keyword
router.get('/get_data/:page?', (res, req) => {
  let currentPage = 1
  let page = 10
  let keyWord = req.query.keyWord
  let filter = {}

  // Read if there are any keywords
  if (keyWord) {
    filter = { title: new RegExp(keyWord, 'i') }
  }

  // get urlparams page
  if (req.params.page) {
    currentPage = Number(req.params.page)
  }

  // currentpage min = 1
  if (currentPage <= 0) {
    currentPage = 1
  }

  // according to the conditions search the database
  Book.find(filter).limit(pageSize).skip((currentPage - 1) * pageSize).sort({id: -1})
  .then(data => {
    // whether the search is successful
    if (data.length > 0) { res.json({ status: 'y', data: data, current_page: currentPage }) } 
    else { res.json({ status: 'n', msg: 'No more data' }) }
  })
  .catch(err => { res.json({ status: 'n', data: [], msg: 'get data faile' }) })
})

```