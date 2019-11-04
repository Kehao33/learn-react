import React from 'react';
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return <div>
            <div className="site-wrapper">

                <div className="site-wrapper-inner">

                    <div className="cover-container">

                        <div className="masthead clearfix">
                            <div className="inner">
                                <h3 className="masthead-brand">哪些年我们一起追过的电影...</h3>
                                <nav>
                                    <ul className="nav masthead-nav">
                                        <li className="active"><a href="#">天正无邪的童年</a></li>
                                        <li><a href="#">热血沸腾的少年</a></li>
                                        <li><a href="#">现在前进的我们</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <br/>
                        <div className="inner cover">
                            <h1 className="cover-heading">我在这里等你</h1>
                            <p className="lead">秦时明月里说过：有些梦想，遥不可及，但也不是没有办法，只要我足够强大</p>
                            <p className="lead">
                                <a href="#" className="btn btn-lg btn-default">点击进入</a>
                            </p>
                        </div>
                        <br/>
                        <br/>

                        <div className="mastfoot">
                            <div className="inner">
                                <p>联系我 => <a href="#">jake</a>, by <a href="#">@jake</a>.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    }

}       