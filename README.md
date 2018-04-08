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

<font color="#409EFF">用户</font>

#### 1. 书籍列表
##### 接口功能

> 返回书籍对应的信息(GET)  

##### URL

> booklist/get_data  

##### 参数:  

|参数|必选|说明|
|:----- |:-------|----- |
|page |false |页数 |
|keyWord |false |关键字|


#### 2. 注册
##### 接口功能

> 注册用户信息(POST)  

##### URL

> booklist/reg

|参数|必选|说明|
|:----- |:-------|----- |
|user_name |true |用户名 |
|pwd |true |密码|
|rePWD |true |二次输入密码|
|name |true |姓名|
|gender |true |性别|
|birthday |true |出生日期|
|mobile |true |手机号码|
|email |true |邮箱|
|address |true |地址|


#### 3. 登录
##### 接口功能

> 用户登录(POST)  

##### URL

> booklist/login  

|参数|必选|说明|
|:----- |:-------|----- |
|userName |true |用户名 |
|userPWD |true |密码|

userName: 用户名  
userPWD: 密码  

#### 4. 借阅
##### 接口功能

> 用户借阅书籍(POST)  

##### URL

> booklist/pick

|参数|必选|说明|
|:----- |:-------|----- |
|id |true |书籍id |
|user_id |true |用户id|



#### 5. 用户个人中心
##### 接口功能

> 用户借阅书籍列表(GET)  

##### URL

> booklist/user_info  

|参数|必选|说明|
|:----- |:-------|----- |
|user_id |true |用户id |

<font color="#409EFF">管理员</font>

#### 1. 登录
##### 接口功能

> 管理员登录(POST)

##### URL

> admin/admin_login  

|参数|必选|说明|
|:----- |:-------|----- |
|adminName |true |管理员用户名 |
|adminPassWord |true |密码|


#### 2. 列表
##### 接口功能

> 用户信息列表(GET)  

##### URL

> admin/list


|参数|必选|说明|
|:----- |:-------|----- |
|page |true |第几页 |
|per_page |true |一页几条|  
|name |false |姓名|  
|mobile |false |手机号码|   


#### 3. 新增 || 编辑
##### 接口功能

> 新增用户或编辑用户(POST)  

##### URL
> admin/add  

|参数|必选|说明|
|:----- |:-------|----- |
|user_name |true |用户名 |
|pwd |true |密码|
|rePWD |true |二次输入密码|
|name |true |姓名|
|gender |true |性别|
|birthday |true |出生日期|
|mobile |true |手机号码|
|email |true |邮箱|
|address |true |地址|


#### 4. 删除
##### 接口功能

> 删除用户(POST)  

##### URL

> admin/delete  

|参数|必选|说明|
|:----- |:-------|----- |
|_id |true |用户ID |

#### 5. 借阅信息
##### 接口功能

> 用户借阅的书籍列表(GET)  

##### URL

> admin/books  

|参数|必选|说明|
|:----- |:-------|----- |
|id |true |用户ID |
