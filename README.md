# React 学习
React 优点总结
* 生态强大
* 上手简单
* 社区强大
#### React 三大体系
![React三大体系.png](https://upload-images.jianshu.io/upload_images/8053630-1cd5d6e170d8cf44.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 脚手架安装
```npm create-react-app```
创建 React 项目
```
create-react-app demo1 or npx create-react-app demo1
cd demo1
yarn start or npm start
```
> #### 项目中的文件说明
* `README.md`：这个文件的主要作用就是对项目的主要说明
* `package.json`：这个文件是 `webpack` 配置和项目包管理文件，项目中依赖的第三方包（包的版本）和一些常用命令配置都在这里面进行配置。
* `package-lock.json`：锁定安装时的版本号，并且要上传到 `git`，以保证其他人再 `npm install` 时大家的依赖能保证一致。
* `gitinore`：这个文件是 `git` 的选择性上传的配置文件。
* `node_modules`：项目的依赖包。
* `public`：公共文件，文件里有公用模板和一些图标等。
* `src`：主要的一些代码。
> #### public 文件
* `favicon.ico`：项目图标。
* `index.html`：首页的模板文件。
* `mainifest.json`：移动端配置文件。
> #### src 文件
* `index.js`：项目入口文件。
* `index.css`：`index.js` 里面的 css 文件。
* `app.js`：这个文件相当于一个方法模块，也是一个简单的模块化编程。
* `serviceWorker.js`：用于移动端开发，`PWA` 必须用到这个文件，这个文件相当于有了离线浏览功能。

#### 编写 HelloWorld.js 组件
> ##### 入口文件 src/index.js
```js
// 重要文件 必须引入
import React from 'react';
// 重要文件 必须引入
import ReactDOM from 'react-dom';
// App 组件
import App from './App';

// 使用 JSX 语法将 App 模块 渲染到了 root ID 上，root ID 是在 public/index.html 中
ReactDOM.render(<App />, document.getElementById('root'));
```
> ##### App.js 组件
```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    //  JSX 语法
    return (
      <div>
        Hello, Jorna
      </div>
    )
  }
}
//  将 App 组件导出
export default App;
```

> #### JSX 语法简介
`JSX` 就是 `JavaScript` 与 `XML` 结合的一种格式。可以方便的利用 `HTML` 来创建虚拟 `DOM`。当遇到 `>` 时，`JSX` 就当作 `HTML` 解析；遇到 `{` 就当作 `JavaScript` 解析。

> ##### 组件与普通 JSX 语法区别
自定义的组件首写字母要大写，而 `JSX` 语法是小写字母开头的。

> ##### JSX 中使用 三元运算符
```js
import React form 'react';
const Component = React.Component;

class App extends Component {
  render() {
    return (
      <div>
        { false ? 'Jorna' : 'nothing!' }
      </div>
    )
  }
}

export default App;
```
> #### 新建 YoungerSister.js 组件
```js
import React, { Component } from 'react';

class YoungerSister extends Component {
  render() {
    return (
      <div>
        <div><input type="text" /><button>增加服务</button></div>
        <ul>
          <li>头部按摩</li>
          <li>精油推背</li>
        </ul>
      </div>
    )
  }
}

export default YoungerSister;
```
> ##### 组件外层包裹原则
React 要求必须在组件的最外层有一层包裹层
> ##### Fragment 标签
Fragment 的作用是当组件不需要这个最外层包裹标签，会用到这个标签。
修改 `YoungerSister` 组件，代码如下：
```js
// 引入 Fragment
import React, { Component, Fragment } from 'react';

class YoungerSister extends Component {
  render() {
    return (
      <Fragment>
        <div><input type="text" /><button>增加服务</button></div>
        <ul>
          <li>头部按摩</li>
          <li>精油推背</li>
        </ul>
      </Fragment>
    )
  }
}

export default YoungerSister;
```
