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
> #### 响应式设计和数据绑定
React 是通过数据进行驱动，改变界面中的效果。React 会根据数据的变化，会自动完成界面的改变。
修改 `YoungerSister.js` 定义构造函数 `constructor`，代码如下：
```js
// js 的构造函数，由于其他任何函数执行
constructor(props) {
  super(props) // 调用 父类 的构造函数，固定写法
  this.state = {
    inputValue: '', // input 中的值
    list: []  // 服务列表
  }
}
```
将 `inputValue` 的值绑定到 `input` 框中，代码如下：
```jsx
<input type="text" value={this.state.inputValue} />
```
> ##### 绑定事件
```jsx
<input type="text" value={this.state.inputValue} onChange={this.inputChange} />
```
`render` 方法下创建 `inputChang` 方法
```jsx
inputChange(e) {
  // 获取到input 中的值  e.target.value
  console.log(e.target.value)
  // 修改 input 中的值，以下是错误的示范
  // this.state.inputValue = e.target.value

}
```
> ###### 两个比较容易犯的错误
- 一个是 `this` 指向不对，需要重新使用 `bind` 设置一下指向。
- 一个是 React 中改变值需要使用 `this.setState` 方法。
重新修改将 `inputValue` 的值绑定到 `input` 框中，代码如下：
```jsx
<input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
```
重新修改 `render` 下 `inputChange` 方法
```jsx
inputChange(e) {
  console.log(e.target.value)
  this.setState({
    inputValue: e.target.value
  })
}
```
> #### 让列表数据化
修改 `YoungerSister.js`，更新构造函数代码
```js
constructor(props) {
  super(props)
  this.state = {
    inputValue: 'Jorna',
    list: ['基础按摩', '精油推背']  // 给 list 数组附加初始值
  }
}
```
循环 `this.state.list` 数组数据到 JSX 中并添加 `key` 属性值，代码如下：
```jsx
render() {
    return (
      <Fragment>
        <div><input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} /><button>增加服务</button></div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index+item}>{item}</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
```
> ##### 给按 button 钮增加事件
```jsx
<button onClick={this.addList.bind(this)}>增加服务</button>
```
`render` 下增加 `addList` 方法，通过 `...` ES6扩展运算符将 `this.state.list` 数据进行分解，然后组合，推荐此写法。
```js
addList() {
  this.setState({
    list: [...this.state.list, this.state.inputValue]
  })
}
```
> ##### 数组下标的传递
如果要删除数组中的某一项，需要借助下标来完成删除事件的操作，将数组的下标传递给方法
```jsx
<ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index+item} onClick={this.deleteItem.bind(this, index)}>{item}</li>
              )
            })
          }
</ul>
```
`render` 下编写 `deleteItem` 删除方法
```js
deleteItem(id) {
  let list = this.state.list
  list.splice(id, 1)
  this.setState({
    list
  })
}
```
### 组件拆分
> #### 新建 `YoungerSisterItem.js` 服务菜单组件
```js
import React, { Component } from 'react'; // 快捷键 imrc

class YoungerSisterItem extends Component { // 快捷键 cc
  render() {
    return (
      <div>Younger Sister</div>
    )
  }
}

export default YoungerSisterItem;
```
更新 `YoungerSister.js` 组件代码，将 `YoungerSisterItem` 组件你导入进来
```js
import React, { Component } from 'react';
// 导入组件
import YoungerSisterItem from './YoungerSisterItem';

class YoungerSister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['精油推背', '基础按摩']
    }
  }
  inputChange(e) {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  deleteItem(id) {
    let list = this.state.list
    list.splice(id, 1)
    this.setState({
      list
    })
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <YoungerSisterItem />
              )
            })
          }
        </ul>
      </div>
    )
  }
}
```
> ### 父子组件传值
> ##### 父向子组件传值，父组件向子组件传递内容，靠属性的形式传递
`content` 自定义属性，子组件用来接收 `item` 值。
```jsx
<YoungerSister content={item}/>
```
> ##### 子组件通过 props 接收
```jsx
  render() {
    return (
      <div>{this.props.content}</div>
    )
  }
```
> ##### 子组件向父组件传值
`YoungerSisterItem` 子组件定义删除方法
- 子组件调用父组件方法，把方法传递给子组件即可，这里也要进行 `this` 绑定，如果不绑定 `this`，就无法找到父组件的方法
```js
import React, { Component } from 'react'; // 快捷键 imrc

class YoungerSisterItem extends Component { // 快捷键 cc
  handleClick() {
    // 调用父组件删除方法，以及传过来的索引值
    this.props.deleteItem(this.props.index)
  }
  render() {
    return (
      <div onClick={this.handleClick.bind(this)}>Younger Sister</div>
    )
  }
}

export default YoungerSisterItem;
```
更新父组件 `YoungerSister` 代码：
```js
import React, { Component } from 'react';
// 导入组件
import YoungerSisterItem from './YoungerSisterItem';

class YoungerSister extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['精油推背', '基础按摩']
    }
  }
  inputChange(e) {
    console.log(e.target.value)
    this.setState({
      inputValue: e.target.value
    })
  }
  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
  }
  deleteItem(id) {
    let list = this.state.list
    list.splice(id, 1)
    this.setState({
      list
    })
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <YoungerSisterItem
                  key={index+item}
                  content={item}
                  index={index}
                  deleteItem={()=> {this.deleteItem(index)}}
                   />
              )
            })
          }
        </ul>
      </div>
    )
  }
}
```
```
