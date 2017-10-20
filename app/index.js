import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.sass';
import Test from './components/Test.jsx';


class App extends Component {
    render(){
        return(
            <div>
                <strong>fsd</strong>
                <p>dsafggg</p>
                <em>dqw</em>
                <Test />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('app'));