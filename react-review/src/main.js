//是项目JS打包文件入口
import React from 'react';
import ReactDom from 'react-dom'

//导入项目的根组件
import App from './App.jsx'


ReactDom.render(<App></App>,document.getElementById('app'));