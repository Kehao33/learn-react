import React from 'react';

import { Button, Icon, Spin, Alert } from 'antd';
import fetchJSONP from 'fetch-jsonp';
import styles from '../../css/movie_item.scss'

export default class MovieDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // info: {}, //电影信息对象
            isloading: true
        }
    }

    componentWillMount() {
    //     fetchJSONP('https://api.douban.com/v2/movie/subject/' + this.props.match.params.id + '?apikey=0b2bdeda43b5688921839c8ecb20399b')
    //         .then(res => res.json())
    //         .then(data => {
                // this.setState({
                //     isloading: false
                // })
    //         })

        setTimeout(() => {
            this.setState({
                isloading: false,
                // movies: data.subjects,
                // total: data.total
            })
        }, 1000);

    }
    

    render() {
        return <div>
            <Button type="primary" onClick={this.goBack}>
                <Icon type="left" />
                返回电影列表页面
            </Button>
            <br/>
            <br/>
            <br/>
            { this.renderInfo() }
        </div>
    }

    //实现返回按钮的功能
    goBack = () => {
        // 返回上一个页面
        this.props.history.go(-1);
    }

    renderInfo = () => {
        if (this.state.isloading) {
            return <Spin tip="Loading...">
                <Alert
                    message="正在请求电影数据..."
                    description="视觉上的盛业，只为了您呀"
                    type="info"
                />
            </Spin>
        } else {
            return <div>
                <div style={{textAlign:'center',width:'560px',height:'500px',margin:'0 auto',backgroundColor:'#eee'}}>
                    {/* <h1>{this.state.info.title}</h1> */}
                    {/* <div className={styles.img}> */}
                    <div style={{ width:'460px',lineHeight:'230px',backgroundColor:'#f40',height:'230px',color:'#fff',margin:'0 auto' }}>
                        电影图片位置
                    </div><br/><br/>
                    <p style={{ width:'480px',backgroundColor:'#fafafa',height:'300px',margin:'0 auto' }}> 我觉得有些人就是生错了地方。造化弄人，他们被抛到某处，
                        却惦念着一个隐约朦胧的故乡。出生地则是异乡，
                        从小熟悉的绿荫小巷、曾经玩耍的拥挤闹市，都只是沿途风景。
                        他们在亲友中也许一辈子都落落寡合，对自己唯一熟悉的环境淡然疏离。
                        也许正是这种陌生感促使他跑遍千山万水寻觅自己永恒的归宿。
                        也许有某种根深蒂固的返祖欲，促使迷途者返回祖先在鸿蒙初辟时离开的故土。
                        有时一个人偶然来到某地，会有莫名其妙的归属感。这就是他寻找的家园，
                        他将融入自己从未见过的环境，
                        与从未谋面的人相伴，似乎生来就和这一切相熟，在这里他终得安歇。</p>
                </div>
                {/* <p style={{ textIndent: '2em', lineHeight: '30px' }}>{this.state.info.summary}</p> */}
                {/* <h1>movieDetail === {this.props.match.params.id}</h1> */}
            </div>
        }
    }

}