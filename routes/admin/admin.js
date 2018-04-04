const express = require('express')
const router = express.Router()
const db = require('../../db')

let admin = [{ adminName: 'admin', adminPassWord: '123456' }]

router.post('/admin_login', (req, res) => {
  console.log(Math.random())
  let admin_name = req.body.adminName
  let admin_pwd = req.body.adminPassWord

  let result = admin.find(item => {
    if (item.adminName == admin_name) {
      return item
    }
  })

  if (result) {
    if (result.adminPassWord == admin_pwd) {
      res.json({ status: 'y', message: '登陆成功' })
    } else {
      res.json({ status: 'n', message: '密码错误' })
    }
  } else {
    res.json({ status: 'n', message: '用户不存在' })
  }
})

module.exports = router
