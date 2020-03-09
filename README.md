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
