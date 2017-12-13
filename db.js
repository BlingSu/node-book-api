const express = require('express')
const db = require('mongoose')

db.connect('mongodb://localhost/books_db', {useMongoClient: true})
db.Promise = Promise

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
