import React from 'react';

import styles from '../../css/movie_item.scss'
import { Rate } from 'antd';

export default class MovieItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div className={styles.box} onClick={this.goDetail}>
            {/* <img src={ this.props.img.small} alt=""/> */}
            {/* <img src={this.props.directors[0].avatars.small} alt=""/> */}
            <div className={styles.img}>
                图片存放位置
            </div>
            <h4 className={styles.hiddenText}>电影名称：{this.props.title}</h4>
            <h4>上映年份： {this.props.year}</h4>
            <h4>电影类型： {this.props.genres.join(',')}</h4>
            <Rate disabled defaultValue={this.props.rating.average / 2} />
        </div>
    }

    goDetail = () => {
        this.props.history.push('/movie/detail/' + this.props.id);
    }
}