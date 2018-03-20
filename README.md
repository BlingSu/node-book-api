##  图书借阅系统api

> 说明: 项目为图书借阅系统的api  

> 主要使用expres构建，crawler爬取数据

### 使用说明

``` bash
# 克隆项目
git clone git@github.com:angelasubi/node-express.git

# 安装依赖
npm install

# 启动mogodb
sudo mongod

# 运行
node app.js

```

### 接口说明

#### 书籍详情
说明: 返回书籍对应的信息  

可选参数:  

page: 页数  

接口地址: /booklist/get_data/:page?  

案例(第三页): /booklist/get_data/3  


