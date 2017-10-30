import React, {Component} from 'react';
import {dispatch} from 'redux'
import {connect} from 'react-redux';
import * as actions from '../actions';
import {app2} from '../reducers/index';


const App = ({add, remove}) => {
    return (
        <div>
            <button onClick={add}>Increment</button>
            <button onClick={remove}>Decrement</button>
            <h3>fsda{this.props.app2}</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    app2: state.app2
}

export default connect(mapStateToProps, actions)(App);