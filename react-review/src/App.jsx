//这是项目的根组件
import React from 'react';

//导入路由组件
import {HashRouter,Roule,Link} from 'react-router-dom';
//导入ant design Layout组件
import { Layout, Menu, Icon } from 'antd';
//导入模块化样式
import style from './css/app.scss';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render(){
        return <HashRouter>
             <Layout>
                 {/* 这是头部部分 */}
                <Header className="header">
                <div className={style.logo} />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">首页</Menu.Item>
                    <Menu.Item key="2">电影</Menu.Item>
                    <Menu.Item key="3">关于</Menu.Item>
                </Menu>
                </Header>
                {/* 这是内容部分 */}
                <Content style={{ backgroundColor: '#f94', height: '488px',color:'#fafafa',fontSize: '23px',textAlign:'center'}}>
                    尽心当下，就是完美
                </Content>
                {/* 这是底部 */}
                <Footer style={{ textAlign: 'center' }}>jake ©2018 Design</Footer>
            </Layout>
        </HashRouter>
    }
}


