const express = require('express')
const db = require('mongoose')

db.connect('mongodb://localhost/books_db', {useMongoClient: true})
db.Promise = promise