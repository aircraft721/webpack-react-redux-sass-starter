import React, {Component} from 'react';
import {connect} from 'react-redux';
import {add, remove} from '../actions/index';
import {app1} from '../reducers/index';

class App extends Component {
    render(){
        return(
            <div>
                <h3>APP Component</h3>
                <button onClick={()=>dispatch(add())}>Increment</button>
                <button onClick={()=>dispatch(remove())}>Decrement</button>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps)(App);