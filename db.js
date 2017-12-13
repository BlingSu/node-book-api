const express = require('express')
const db = require('mongoose')

db.connect('mongodb://localhost/books_db', {useMongoClient: true})
db.Promise = promise

const Schema = db.Schema
const bookSchema = new Schema({
  title: String,
  img: String,
  link: String,
  price:String,
  author: String,
  publicsher: String
})
