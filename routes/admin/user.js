const express = require('express')
const router = express.Router()
const db = require('../../db')
const User = db.User
const UserBook = db.UserBook


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
  let countUser = User.count(filter)
  countUser.then(count => {
    pageCount = Math.ceil(count / per_page) // 总页数
    let findUser = User.find(filter)
      .limit(Number(per_page))
      .skip((page -1) * per_page)
      findUser.then(data => {
        res.json({ status: 'y', data: data, page: page, per_page: per_page, total: pageCount, current_page: page })
      })
      findUser.catch(err => {
        console.log(err)
        res.json({ status: 'n', message: err })
      })
  })
  countUser.catch(err => {
    console.log(err)
    res.json({ status: 'n', message: err })
  })
})


router.post('/add', (req, res) => {
  let user = new User(req.body)
  User.findById(user.id, (err, resp) => {
    if (err) {
      res.json({ status: 'n', message: '未知错误～'})
    } else {
      User.findByIdAndUpdate(user.id, req.body, {upsert: true}, (err, data) => {
        if (err) {
          res.json({ status: 'n', message: '新增失败'})
        } else {
          if (resp) {
            res.json({ status: 'y', message: '编辑成功'})
          } else {
            res.json({ status: 'y', message: '新增成功'})
          }
        }
      })
    }
  })
})
module.exports = router
