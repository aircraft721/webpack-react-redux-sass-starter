import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.sass';

import Test from './components/Test.jsx';
import Contact from './components/Contact';

import NotFound from './components/NotFound';
import Header from './components/Header';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {connect} from 'react-redux';
import {add, remove} from './actions/index';
import reducer from './reducers';


let store = createStore(reducer);

store.subscribe(() => {
    console.log(store.getState());
})

class App extends Component {
    render(){
        console.log(this.props.value);
        return(
            
            <div>
                <h3>APP Component</h3>
                <button onClick={()=>store.dispatch(add())}>Increment</button>
                <button onClick={()=>store.dispatch(remove())}>Decrement</button>
            </div>
        );
    }
}

const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => <App value={store.getState() } />}/>
                    <Route path='/test' component={Test} />
                    <Route path='/contact' component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('app'));