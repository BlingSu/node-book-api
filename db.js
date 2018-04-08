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

const userSchema = new Schema({
  name: String,
  gender: String,
  birthday: {
    type: Date,
    default: Date.now()
  },
  user_name: String,
  pwd: String,
  mobile: String,
  email: String,
  address: String,
  created_at: {
    type: Date,
    default: Date.now()
  },
  updated_at: {
    type: Date,
    default: Date.now()
  }
})

const userBookSchema = new Schema({
  booked_date: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'student'
  },
  book_id: {
    type: Schema.Types.ObjectId,
    ref: 'books'
  }
})

userBookSchema.methods.getBookedDate = function() {
  return (`${this.booked_date.getFullYear()}-${this.booked_date.getMonth() + 1}-${this.booked_date.getDate()}  ${this.booked_date.getHours()}:${this.booked_date.getMinutes()}`)
}

const Book = db.model('books', bookSchema)
const User = db.model('student', userSchema)
const UserBook = db.model('student_book', userBookSchema)

module.exports = {
  Book: Book,
  User: User,
  UserBook: UserBook
}
