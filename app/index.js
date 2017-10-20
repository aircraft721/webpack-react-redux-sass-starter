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


let store = createStore((state = {count: 0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                ...state, count: state.count + 1
            }
        case 'DECREMENT':
            return{
                ...state, count: state.count - 1
            }
        return state;
    }
});

store.subscribe(() => {
    console.log(store.getState());
})

class App extends Component {
    render(){
        
        return(
            <div>
                <h3>APP Component</h3>
                <button onClick={()=>store.dispatch(add())}>Increment</button>
                <button onClick={()=>store.dispatch(remove())}>Decrement</button>
                
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    count: state.count
})

export default connect(mapStateToProps)(App);


const routes = (
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' component={App} />
                    <Route path='/test' component={Test} />
                    <Route path='/contact' component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(routes, document.getElementById('app'));