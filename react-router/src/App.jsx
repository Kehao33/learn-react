import React from 'react';
import {HashRouter,Route,Link} from 'react-router-dom';
import Home from './components/Home.jsx';
import Movie from './components/Movie.jsx';
import About from './components/About.jsx';

//导入日期选择组件
import {DatePicker} from 'antd';

export default class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        //当使用HashRounter把App根组件的元素包裹起来后，网站就已经启用路由了
        return <HashRouter>
            <div>
                 <h1>这是网站App的根组件</h1>
                 
                 <hr/>
                 {/* Link实现连接跳转 */}
                 <Link to="/home">首页</Link> &nbsp;&nbsp;&nbsp;
                 <Link to="/movie/top250/10">电影</Link>&nbsp;&nbsp;&nbsp;
                 <Link to="/about">关于</Link>
                <hr/>

                <Route path="/home" component={Home}></Route>
                <hr/>
                {/* 如果要匹配参数，可以在匹配规则中使用：修饰符，表示这个位置匹配到的是参数 */}
                <Route exact path="/movie/:type/:id" component={Movie}></Route>
                <hr/>
                <Route path="/about" component={About}></Route>

                <DatePicker></DatePicker>
            </div>
        </HashRouter>
    }
}