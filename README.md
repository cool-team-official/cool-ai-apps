## 文档地址

[https://docs-ai.cool-js.com](https://docs-ai.cool-js.com)

## 前提条件

为了更快地安装项目依赖，必须提前安装好[cnpm](https://developer.aliyun.com/mirror/NPM?from=tnpm)

!>`npm install -g cnpm --registry=https://registry.npm.taobao.org`

## 创建应用

[视频教程](https://www.bilibili.com/video/BV1Qk4y127WZ/)

##### 1、使用COOL-AI脚手架创建
```js
 1、vue create project
 2、cd project
 3、vue add router //如果新建的时候已经选择这步可以忽略
 4、vue add vue-cli-plugin-cool-ai //添加COOL-AI的脚手架插件
 5、npm run serve
``` 

!>  vue的`router`是必须添加的，并且需要将 `router` 的`mode`设置为`hash`

#### 2、目录结构
```js
project
  ├── package.json
  ├── app.json (COOL-AI应用配置文件)
  ├── db.json (COOL-AI数据库配置文件)
  ├── public
  ├── src
  |   ├── assets(资源)
  │   ├── components(组件)
  │   ├── router(路由)
  │   ├── views(页面)
  |   |—— App.vue
  |   |—— main.js
  |   |—— preload.js(cool-ai预加载的js)
```


##### 3、app.json配置
```js
{
    // 应用ID，用脚手架创建的时候自动生成
    "appId": "z-gK4vSCQ", 
    // 应用名称
    "name": "这是个测试应用", 
    // 版本号
    "version": "0.0.1", 
    // 应用描述
    "description": "测试应用", 
    // 入口文件默认为 index.html 一般不需要修改
    "main": "index.html", 
    // 预加载js， 该js文件会在所有资源文件之前加载
    "preload": "preload.js", 
    // 应用logo， 一般无需修改
    "logo": "logo.png",
    // 应用支持的平台
    "platform": [ "win32", "darwin" ], 
    // 关键字
    "keyWords": [ "cool-ai", "cool" ], 
    // 打开时时候隐藏小酷，如果隐藏了应用显示区域会更大
    "xiaoku": { "hide": false }, 
    // 开发时的配置
    "dev": { 
        // 地址
        "main": "http://127.0.0.1:8081", 
        // 预加载js
        "preload": "src/preload.js", 
         // logo
        "logo": "src/assets/logo.png"
    },
    // preload.js 引用第三方包时需要在此添加
    "build": { "externals": [] } 
}
```

##### 4、db.json配置文件

```js
{
    // 是否是云端数据库， false为本地数据库
    "isCloud": false, 
    // 表结构
    "tables": [{
        "name": "user",
        "model": {
            "id:int": {
                "pk": true,
                "ai": true
            },
            "age:int": {
                "default": 13,
                "max": 110,
                "min": 13
            },
            "name:string": {
                "default": "none",
                "notNull": true
            }
        }
    }]
}
```
表结构详见[nanosql](https://nanosql.io/query/create-table.html#making-tables)


## 调试应用

##### 1、打开开发者中心

打开或运行COOL-AI->微信扫码登录->点击头像进入开发者中心

<img src="https://docs-ai.cool-js.com/img/home.png" width="700" height="450"  style="border:1px solid #fff;border-width:5px 5px 5px 5px;box-shadow:1px 1px 5px #333; -webkit-box-shadow:1px 1px 5px #333;-moz-box-shadow:1px 1px 5px #333;"/>


##### 2、在开发者中心创建应用

将之前创建好的项目中的`app.json`文件拖入开发者中心，就会自动创建一个对应的项目

<img src="https://docs-ai.cool-js.com/img/dev.png" width="700" height="450"  style="border:1px solid #fff;border-width:5px 5px 5px 5px;box-shadow:1px 1px 5px #333; -webkit-box-shadow:1px 1px 5px #333;-moz-box-shadow:1px 1px 5px #333;"/>


#### 3、运行应用

点击运行按钮，就可以看到对应应用的运行窗口啦

<img src="https://docs-ai.cool-js.com/img/run.png" width="700" height="450"  style="border:1px solid #fff;border-width:5px 5px 5px 5px;box-shadow:1px 1px 5px #333; -webkit-box-shadow:1px 1px 5px #333;-moz-box-shadow:1px 1px 5px #333;"/>

#### 4、上传应用

点击上传按钮，填写版本信息，点确定后应用会自动打包编译并上传

<img src="https://docs-ai.cool-js.com/img/release1.png" width="700" height="450"  style="border:1px solid #fff;border-width:5px 5px 5px 5px;box-shadow:1px 1px 5px #333; -webkit-box-shadow:1px 1px 5px #333;-moz-box-shadow:1px 1px 5px #333;"/>

<img src="https://docs-ai.cool-js.com/img/release2.png" width="700" height="450"  style="border:1px solid #fff;border-width:5px 5px 5px 5px;box-shadow:1px 1px 5px #333; -webkit-box-shadow:1px 1px 5px #333;-moz-box-shadow:1px 1px 5px #333;"/>
