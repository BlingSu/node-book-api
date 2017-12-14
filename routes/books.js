/**
 * router interface
 * @author angelasu 
 * @date 2017/12/14
 */

const express = require('express')
const router = express.Router()
const db = require('../db')
const Book = db.Book

router.get('/get_data/:page?', (req, res) => {
  let currentPage = 1
  let pageSize = 10
  let keyWord = req.query.keyWord
  let filter = {}

  if (keyWord) {
    filter = { title: new RegExp(keyWord, 'i') }
  }
  if (req.params.page) {
    currentPage = Number(req.params.page)
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
      res.json({
        status: 'n',
        msg: 'No more data'
      })
    }
  })
  .catch(err => {
    res.json({
      status: 'n',
      data: [],
      msg: 'get data faile'
    })
  })
})

module.exports = router