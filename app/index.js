import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './app.sass';

import Test from './components/Test.jsx';
import Contact from './components/Contact';
import App from './components/App';
import NotFound from './components/NotFound';
import Header from './components/Header';

import {BrowserRouter, Route, Switch} from 'react-router-dom';


const routes = (
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
);

ReactDOM.render(routes, document.getElementById('app'));