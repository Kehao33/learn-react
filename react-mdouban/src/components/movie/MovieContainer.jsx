import React from 'react';

import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

//导入路由相关的组件
import { Link, Route, Switch } from 'react-router-dom'

//导入电影列表
import MovieList from './MovieList.jsx'

// 导入电影详情组件
import MovieDetail from './MovieDetail.jsx'
export default class MovieContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <Layout style={{ height: '100%', backgroundColor: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                    style={{ height: '100%' }}
                >
                    <Menu.Item key="1" key='in_theaters'><Link to="/movie/in_theaters/1">正在热映</Link></Menu.Item>
                    <Menu.Item key="2" key='coming_soon'><Link to="/movie/coming_soon/1">即将上映</Link></Menu.Item>
                    <Menu.Item key="3" key='top250'><Link to="/movie/top250/1">Top250</Link></Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ paddingLeft: '1px', backgroundColor: '#fff' }}>
                <Content style={{ padding: 10, minHeight: 280 }}>
                    {/* 在匹配路由规则的时候，这里提供了两个参数，如果想从路由规则中提取参数，需要使用this.props.match.params.attr */}
                    {/* 注意及时用exact来为路由进行精准匹配，匹配的时候也会从上到下把所有的路由匹配一遍 */}
                    {/* 在Switch的包裹下，只要有一条路由匹配上了，就不会继续往下执行了 */}
                    <Switch>  
                        <Route exact path="/movie/detail/:id" component={MovieDetail}></Route>
                        <Route exact path="/movie/:type/:page" component={MovieList}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    }

}