//1.导入React包
import React from 'react';
import ReactDom from 'react-dom';
import App from './App.jsx'

//曲剧导入antDesign的样式表
//一般我们使用的第三方UI组件，他们使用的样式表文件，都是以.css结尾，我们最好不要为.css的文件启用模块化
//我们推荐自己不要手写.css的文件，而是自己手写scss或less文件，这样，我们只需要为scss或less文件启用模块化就好了；

//全局导入antd的样式表
// import 'antd/dist/antd.css'
//由于直接使用Ant Design的全部包，体积过大，所以建议以按需导入的方式来减少输出文件bundle.js的体积
//babel-plugin-import插件来实现按需导入

//如果要使用路由器模块，第一步：yarn add react-rounter-dom
//第二步：导入路由模块
import {HashRouter, Rounte, Link} from 'react-router-dom'
//HashRounter表示一个路由的跟容器，将来所有的路由相关的东西，都要包裹在HashRounter里边，一个网站只需要使用一次HashRounter就好了
//Rounte表示一个路由规则，在Route上，有两个比较重要的属性，path，component
//Link表示一个路由的链接，就好比vue中的<rounter-link to=""></rounter-link>



//使用render函数渲染虚拟DOM
ReactDom.render(<App></App>,document.getElementById('app'));