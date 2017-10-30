import React from 'react';
import {connect} from 'react-redux'
import {ping} from '../actions';

const Contact = ({ping}) => {
    return (
        <div>
            <h3>Contact</h3>
            <button onClick={ping}>Start PING</button>
            <button onClick={()=>store.dispatch(ping())}>Increment</button>
            
        </div>
    );
}


export default Contact;