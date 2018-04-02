/**
 * router: interface
 * @author: angelasu
 * @date: 2018/03/20
 * @description: reg, login
 */

const express = require('express')
const router = express.Router()
const db = require('../db')
const Student = db.Student
const StudentBook = db.StudentBook

router.post('/login', (req, res) => {
  Student.findOne({ user_name: req.body.userName })
  .then(data => {
    if (data) {
      if (data.pwd == req.body.userPWD) {
        res.json({ status: 'y', message: '登录成功', data: { 'user_id': data._id }})
      } else {
        res.json({ status: 'n', message: '密码错误' })
      }
    } else {
      res.json({ status: 'n', message: '用户信息不存在，请先注册' })
    }
  })
})

router.post('/reg', (req, res) => {
  Student.findOne({ user_name: req.body.user_name })
  .then(r => {
    if (r) r.json({ status: 'n', message: '用户已存在～' })
      Student.findByIdAndUpdate(new require('mongodb').ObjectID(), req.body, { upsert: true })
      .then(data => {
        if (data) res.json({ status: 'n', message: '注册失败' })
          res.json({ status: 'y', message: '注册成功' })
      })
  })
})

router.get('/user_info', (req, res) => {
  Student.findById(req.query.user_id)
  .then(data => {
    if (data) {
      StudentBook.find({ user_id: req.query.user_id }).populate('book_id')
      .then(resp => {
        res.json({ status: 'y', user: data, books: resp })
      })
    } else {
      res.json({ status: 'n', message: '用户信息不存在，请先登录' })
    }
  })
  .catch(err => {
    throw new Error(err)
  })
})

module.exports = router
