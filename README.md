express-restful-demo
=============================

用express实现的restful架构样例。支持mongodb、redis。修改下的config/bootstrap，可随心修改加载符合自己需求的第三方库。

## 安装

```
git clone https://github.com/lordking/express-restful-demo.git
cd express-restful-demo
npm install
```

## 启动与关闭

推荐使用pm2启动，具体安装使用，请点击==>[传送门](http://pm2.keymetrics.io)。

```
pm2 start app.json
```

```
pm2 stop express-restful-demo
```

## 测试

测试之前，请启动app。

```
npm install -g mocha
cd express-restful-demo
mocha
```
