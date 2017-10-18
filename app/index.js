import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.sass';


class App extends Component {
    render(){
        return(
            <div>
                <strong>fsd</strong>
                <p>dsadas</p>
                <em>das</em>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));