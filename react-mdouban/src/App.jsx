//这是项目的根组件
import React from 'react';

//导入路由组件
import { HashRouter, Route, Link } from 'react-router-dom';

//导入需要的Ant Design组件
import { Layout, Menu} from 'antd';
const { Header, Content, Footer } = Layout;

//导入模块话的样式
import styles from './css/app.scss'

//导入路由相关的组件页面
import HomeContainer from './components/home/HomeContainer.jsx';
import MovieContainer from './components/movie/MovieContainer.jsx';
import AboutContainer from './components/about/AboutContainer.jsx';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return <HashRouter>
            <Layout className="layout" style= {{ height:"100%"}}>
                {/* 这是头部区 */}
                <Header>
                    <div className={styles.logo} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        // 使用window.location.hash得到请求体，然后保证刷新的时候默认选中不改变
                        defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="home">
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <Menu.Item key="movie">
                            <Link to="/movie/in_theaters/1">电影</Link>
                        </Menu.Item>
                        <Menu.Item key="about">
                            <Link to="/about">关于</Link>
                        </Menu.Item>
                    </Menu>
                </Header>
               
                {/* 这是中间内容区 */}
                <Content style={{ padding: '0 50px', background: '#fff', flex: 1}}>
                    {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 , height:'100%'}}>Content</div> */}
                   <Route path="/home" component={HomeContainer}></Route>
                   <Route path="/movie" component={MovieContainer}></Route>
                   <Route path="/about" component={AboutContainer}></Route>
                </Content>
                
                {/* 这是底部区 */}
                <Footer style={{ textAlign: 'center' }}> 比国王富有  ©2019 Created by jake</Footer>
            </Layout>
        </HashRouter>
    }
}