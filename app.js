const express = require('express')
const app = express()


app.get('/books/', require('./routes/books'))

app.listen(3333, () => {
  console.log(`the server is running prot: 3333.....`)
})