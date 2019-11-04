import React from 'react';

export default class Movie extends React.Component{
    constructor(props){
        super(props);

        this.state={

            routeParams:props.match.params
        }
    }

    render(){
        console.log(this)
        //如果要想从路由规则中，提取匹配到的参数，进行使用，可以使用this.props.match.params.Name;
        return <div>
           Movie === {this.state.routeParams.type}====={this.state.routeParams.id}
        </div>
    }
}