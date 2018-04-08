##  图书借阅系统api

> 说明: 项目为图书借阅系统的api  

> 主要使用expres构建，crawler爬取数据

### 使用说明

``` bash
# 克隆项目
git clone git@github.com:angelasubi/node-book-api.git

# 安装依赖
npm install

# 启动mogodb
sudo mongod

# 运行
nodemon app.js

```

### 接口说明

> 用户

#### 书籍详情
说明: 返回书籍对应的信息(GET)  

接口: /booklist/get_data  

可选参数:  

page: 页数  
keyWord: 关键字  

#### 注册
说明: 注册用户信息(POST)  

接口: /booklist/reg

参数:  

user_name: 用户名  
pwd: 密码  
rePWD: 二次输入密码  
name: 姓名  
gender: 性别  
birthday: 出生日期  
mobile: 手机号码  
email: 邮箱  
address: 地址  

#### 登录
说明: 用户登录(POST)  

接口: /booklist/login  

参数:  

userName: 用户名  
userPWD: 密码  

#### 借阅
说明: 用户借阅书籍(POST)  

接口: /booklist/pick

参数:  

id: 书籍id  
user_id: 用户id  


#### 用户个人中心
说明: 用户借阅书籍列表(GET)  

接口: /booklist/user_info  

参数:  

user_id: 用户id  

> 管理员

#### 登录
说明: 管理员登录(POST)

接口: /admin/admin_login  

参数:  

adminName: 管理员用户名  
adminPassWord: 密码


#### 列表
说明: 用户信息列表(GET)  

接口:

参数:  /admin/list  

page: 第几页  
per_page: 一页几条  
name: 姓名  
mobile: 手机号码  


#### 新增 || 编辑
说明: 新增用户或编辑用户(POST)  

接口: /admin/add  

参数:  

user_name: 用户名  
pwd: 密码  
rePWD: 二次输入密码  
name: 姓名  
gender: 性别  
birthday: 出生日期  
mobile: 手机号码  
email: 邮箱  
address: 地址  


#### 删除
说明: 删除用户(POST)  

接口: /admin/delete  

参数:  

_id: 用户id

#### 借阅信息
说明: 用户借阅的书籍列表(GET)  

接口: /admin/books  

参数:  

id: 用户id
