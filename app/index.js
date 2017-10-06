import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.sass';


export default class App extends Component {
    render(){
        return(
            <div>
                hello
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));