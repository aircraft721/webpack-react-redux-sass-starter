import React, {Component} from 'react';

export default class Test extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: new Date().toLocaleString('en-US', {hour12: false})
        }

        this.tick = this.tick.bind(this);
    }

    tick(){
        this.setState({
            time: new Date().toLocaleString('en-US', {hour12: false})
        })
    }

    componentDidMount(){
        this.id = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.id);
    }

    render(){
        return (
            <div className='test'>
                <h3>Clock</h3>
                {this.state.time}
            </div>
        );
    }
} 