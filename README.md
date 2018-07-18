# egg-init-ts

egg using typescript

## QuickStart

### 开发阶段

```bash
$ npm i
$ npm run dev
$ open http://localhost:18001/
```

### 编译成js
```bash
$ npm run ci
```
执行命令后会进行tslint代码检查(已经去掉蛮多恶心的检查)))
通过后在目录下会产生dist的目录，里面就是编译后js文件(server.js为PM2的启动文件)
重新执行npm run ci 会先把现有dist目录清楚再生成，多余文件无需手动清楚
### 部署生产阶段
#### 一、打包

方式1、
```bash
$ cd dist
$ npm install --production
```
然后将dist文件夹压缩成压缩文件，这样可多次部署，回滚等
PS:node版本尽量一致

方式2
将dist文件夹传到服务器后，在服务器端cd到目录然后执行npm install --production
这个比较繁琐，但是出现node版本不一致导致出问题的概率较低
#### 二、启动
1、使用egg的官方推荐方法(egg-scripts)
直接cd到目录 执行 npm start(端口可在package.json改，后者在config.default.js里面改，详情查看egg官网)
2、使用PM2
目录下的server.js即为PM2的启动文件

本人目前使用的是宝塔的傻瓜式服务器面板管理服务器，所以用的是pm2的方式运行
由于没找到详细的egg的typescipt版，自己也折腾了好几个小时，所以写出来自己也记录一下
刚从.NET转node，后面慢慢增加egg各部分用ts怎么声明定义，包括一些常用插件增加支持ts版，以达到智能提示的良好体验。

### Requirement

- Node.js 8.x
- Typescript 2.8+
