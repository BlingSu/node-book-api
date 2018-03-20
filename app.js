const express = require('express')
const app = express()


app.use('/books/', require('./routes/books'))
app.use('/user/',require('./routes/user'))

app.listen(3333, () => {
  console.log(`the server is running prot: 3333.....`)
})
