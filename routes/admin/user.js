const express = require('express')
const router = express.Router()
const db = require('../../db')
const Student = db.Student
const StudentBook = db.StudentBook


/**
 * 获取页码
 * @page: 当前页
 * @pageCoutn: 总页
 */


router.get('/list', (req, res) => {
  let page = 1
  let per_page = 10

  if (req.query.page) {
    page = Math.ceil(req.query.page)
  }
  if (req.query.per_page) {
    per_page = Math.ceil(req.query.per_page)
  }

  let filter = {}

  if (req.query.name) { filter.name = new RegExp(req.query.name, 'i') }

  if (req.query.mobile) { filter.mobile = new RegExp(req.query.mobile, 'i') }

  /* 数量 */
  let countStudent = Student.count(filter)
  countStudent.then(count => {
    pageCount = Math.ceil(count / per_page) // 总页数
    let findStudent = Student.find(filter)
      .limit(Number(per_page))
      .skip((page -1) * per_page)
      findStudent.then(data => {
        res.json({ status: 'y', data: data, page: page, per_page: per_page, total: pageCount, current_page: page })
      })
      findStudent.catch(err => {
        console.log(err)
        res.json({ status: 'n', message: err })
      })
  })
  countStudent.catch(err => {
    console.log(err)
    res.json({ status: 'n', message: err })
  })
})

module.exports = router
