### 什么是Node.js

- Node.js的本质是一个JavaScript的解析器
- Node.js是JavaScript的运行环境
- Node.js是一个服务器程序
- Node.js本身使用V8引擎
- Node不是web服务器

### 为什么要使用Node.js

- 为了提供高性能饿web服务
- IO性能强大
- 事件处理机制完善
- 天然能够处理DOM
- 社区活跃，生态圈日趋完善

### Node.js优势

- 处理大流量数据
- 适合实时交互的应用
- 完美支持对象数据库
- 异步处理大量并发连接

### 基础知识

- JavaScript
- ES6
- 服务器相关知识
- Linux系统知识

---

```js
// 阻塞代码
var fs = require('fs');
var data = fs.readFileSync('data.txt');
console.log(data.toString());
// 输出 abcde

// 非阻塞代码
var fs = require('fs');
fs.readFile('data.txt',function(err, data){
  if(e){
    return console.error(err);
  }
  console.log(data.toString());
})
console.log('执行完毕')
// 输出
// 执行完毕
// abcde
```

### 事件

### 事件驱动模型

```js
// 引入Event模块并创建eventsEmitter对象
var events = require('events');
var eventEmitter = new events.EventEmmitter();
// 绑定事件处理函数
var connctHandler = function(){
  console.log('connected被调用')
}

eventEmitter.on('connection', connctHandler()); // 完成事件绑定
// 触发事件
eventEmitter.emit('connection');
console.log('程序执行完毕')

// 输出
// connected被调用
// 程序执行完毕
```

### 模块化

- 模块化的概念与意义

  - 为了让Node.js的文件可以相互调用，Node.js提供了一个简单的模块系统

- Node.js中的模块

  - 模块是Node.js应用程序的基本组成部分
  - 文件和模块是一一对应的，一个Node.js文件就是一个模块
  - 这个文件可能是Javascript代码，JSON或者编译过的c/c++扩展
  - Node.js中存在4类模块（原生模块和3种文件模块）

- Node.js的模块加载流程

  require方法加载模块

  - http、fs、path等怨声模块
  - ./mod 等 ，相对路径的文件模块
  - /path 等，绝对路径的文件模块（注意生产环境）

- 模块化代码案例 

  ```js
  // hello.js
  function Hello(){
    var name;
    function setName(argName){
      name = argName;
    }
    function sayName(){
      console.log('hello',name)
    }
  }
  module.exports = Hello;
  
  // say.js
  var Hello = require('./hello');
  var hello = new Hello();
  hello.setName('wl');
  hello.sayName();
  ```

  ### Node.js路由

  ```js
  // http.js
  var http = require('http');
  var url = require('url');
  
  function start(){
    function onRequest(request, response){
      var pathname = url.parse(request.url).pathname;
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('hello world');
      response.end();
    }
    http.createServer(onRequest).listen(8888)
  }
  exports.start = start;
  ```

  ```js
  // route.js
  function route(pathname){
    console.log('request for' + pathname + 'receive')
  }
  export.route = route;
  ```

  