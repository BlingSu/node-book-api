/**
 * router: interface
 * @author: angelasu
 * @date: 2017/12/14
 * @description: booklist
 */

const express = require('express')
const router = express.Router()
const db = require('../db')
const Book = db.Book
const StudentBook = db.StudentBook

router.get('/get_data', (req, res) => {
  let currentPage = 1
  let pageSize = 20
  let keyWord = req.query.keyWord
  let filter = {}

  if (keyWord) {
    filter = { title: new RegExp(keyWord, 'i') }
  }
  if (req.query.page) {
    currentPage = Number(req.query.page)
  }
  if (currentPage <= 0) {
    currentPage = 1
  }

  Book.find(filter).limit(pageSize).skip((currentPage - 1) * pageSize).sort({id: -1})
  .then(data => {
    if (data.length > 0) {
      res.json({
        status: 'y',
        data: data,
        current_page: currentPage
      })
    } else {
      res.json({ status: 'n', message: 'No more data' })
    }
  })
  .catch(err => {
    res.json({ status: 'n', data: [], message: 'get data fail' })
  })
})

router.post('/pick', (req, res) => {
  if (req.body.user_id) {
    StudentBook.count({ book_id: req.body.id })
    .then(count => {
      console.log(count)
    })
  }
})

module.exports = router
