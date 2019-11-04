import React from 'react';

//导入UI组件
import { Spin, Alert, Pagination } from 'antd';

// 导入fetch-jsonp
import fetchJSONP from 'fetch-jsonp';

// 导入电影框
import MovieItem from './MovieItem.jsx';

export default class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [], //电影列表
            nowPage: parseInt(props.match.params.page) || 1, //当前展示第几页的数据
            pageSize: 12, //每页显示多少条数据
            total: 0, //当前电影分类下，共有多少条数据
            isloading: true, //数据是否正在加载，如果为true，表示正在加载数据 
            movieType: props.match.params.type //保存电影的类型
        }
    }


    componentWillMount() {

        setTimeout(() => {
            //假设1秒以后，数据获取回来了
            this.setState({
                isloading: false // 当数据获取回来之后，把isloading 加载中设置为 false
            })
        }, 1000);

        this.loadMovieListByTypeAndPage();
        // console.log('ok');
        // fetch('https://www.cnblogs.com/libin-1/p/6853677.html')  //但是fetch也是受到跨越的限制
        //     .then(response => {
        //         //当使用fetch API获取数据的时候，第一个.then中，获取不到数据
        //         //第一个.then中拿到的是一个Response对象，我们可以调用response.json得到一个新的Promise
        //         //console.log(response);
        //         return response.json();
        //     })
        //     .then(data => {  //这里的data才是我们请求到的数据
        //         console.log(data);
        //     })
    }


    //  组件将要接受新属性
    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match);
        //每当 地址栏发生变化的时候，重置state中的参数项，充值完毕后，我们可以重新发起数据请求了
        this.setState({
            isloading: true, //表示又要重新加载电影数据了
            nowPage: parseInt(nextProps.match.params.page) || 1,
            movieType: nextProps.match.params.type, //电影类型
            total: 0
        }, function () {
            this.loadMovieListByTypeAndPage();
        });

    }

    render() {
        return <div>
            {this.renderList()}
        </div>
    }

    //根据电影类型和页码，获取电影数据
    loadMovieListByTypeAndPage = () => {

        // 开始获取数据的索引
        const start = this.state.pageSize * (this.state.nowPage - 1);

        //  myKey: b0b0073cbd99a413e2e894a6275bf9ec
        //  url2=`http://v.juhe.cn/movie/index?key=您申请的key&title=%E9%92%A2%E9%93%81%E4%BE%A03`
        // const url = `https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${start}&count=${this.state.pageSize}`
        const url = `https://api.douban.com/v2/movie/${this.state.movieType}?apikey=0b2bdeda43b5688921839c8ecb20399b&start=${start}&count=${this.state.pageSize}`
        fetchJSONP(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            this.setState({
                isloading: false,  //将loadign效果隐藏
                movies: data.subjects, //为电影列表重新赋值
                total: data.total       //把总条数，保存state
            })
        })

        // //如下是用json来模拟请求的
        // const data = require('../test_data/' + this.state.movieType + '.json');
        // setTimeout(() => {
        //     this.setState({
        //         isloading: false,
        //         movies: data.subjects,
        //         total: data.total
        //     })
        // }, 1000);

        // //如下会受到 同源策略的影响，存在跨域问题
        // //注意：默认的window.fetch(url)受到跨域限制，无法直接使用，这时候，我们就得使用第三方包fetch-json 来发送JSONP 请求，他它的用法和浏览器内置的fetch完全兼容
        // fetch('https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b')
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
    }

    //渲染电影列表的方法
    renderList = () => {
        if (this.state.isloading) { //正在加载中
            return <Spin tip="Loading...">
                <Alert
                    message="正在为您疯狂电影...."
                    description="视觉上的盛业，只为了您呀"
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {this.state.movies.map(item => {
                        // console.log(item)
                        // 把点前的history传递到过去
                        return <MovieItem {...item} key={item.id} history={this.props.history}></MovieItem>
                    })}
                </div>
                {/* 分页标签 */}
                <div>
                    <Pagination defaultCurrent={this.state.nowPage} pageSize={this.state.pageSize} total={this.state.total} onChange={this.pageChanged} />
                </div>
            </div>
        }
    }

    // 当页面改变的时候，加载新的页面
    pageChanged = (page) => {
        console.log(this.props);
        // 收到使用 BOM 对象来实现跳转，这样不推荐，最好使用路由的方法进行编程式导航
        // window.location.href = '/#/movie/'+ this.state.movieType + '/' + page;

        // 使用react-router-dom实现编程式导航
        this.props.history.push('/movie/'+this.state.movieType + '/' + page);
    }
}