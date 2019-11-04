//在react的学习中，需要安装react ,react-dom两个包
//react专门用来创建react组件，组件生命周期等东西
//react-dom里封装了和dom操作相关的包，如页面渲染
import React from 'react';
import ReactDom from 'react-dom';

//2.在react中，创建DOM元素只能使用React中提供的js API来创建，不能像vue中的那样手写html元素

// var myH1 = React.createElement('h1',null,'h1标签上线');
// var myDiv = React.createElement('div',{title:'div-title',id:'myD'},'this is a div',myH1);

// var arr = [];
// for(var i = 0; i < 10; i++){
//     var p = <p className="page1" key={i}>这是一个p标签</p>
//     arr.push(p);
// }

// var h1Title= 'h1-title';
// var myDiv = <div>
//     这是利用jsx语法创建的div元素
//     <h1 title={h1Title+"1"}>我是h1，在jsx的语法下创建的</h1>
//     <p className="page">在jsx中创建类名，要用className哦</p>
//     <label htmlFor="id"></label>
//     {arr}
// </div>
// ReactDom.render(myDiv,document.getElementById('app'));

//=================================创建组件=======================
// function Hello(){
//     return <div>
//         <h1>构造函数的名字就是组件名，组件名必须大写才行哦</h1>
//     </div>
// }

// import Hello from './conpoents/Hello.jsx';
// // import myclass from './class_study.js';

// import myclass2 from './class_study2.js'

// var person = {
//     name: 'zhang3',
//     age: 23,
//     gender: 'boy',
//     address:'beijing'
// }

// {// 这样才能起到单行注释的作用
// }
// ReactDom.render(<div>
//     {/* {<Hello name={person.name} age={person.age}></Hello>} */}
//     <Hello {...person}></Hello>
// </div>,document.getElementById("app"));

var myDiv = React.createElement('h2',{id:'myh2',title:'ok'},'这是一个h2');
ReactDom.render(myDiv,document.getElementById('app'));