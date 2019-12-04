import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import BasicState from './hooks-state/BasicState';
import MultipleState from './hooks-state/MultipleState';
import BasicEffect from './hooks-effect/BasicEffect';
import FetchEffect from './hooks-effect/FetchEffect';
import AxiosEffect from './hooks-effect/AxiosEffect';
import ListenerEffect from './hooks-effect/ListenerEffect';

ReactDOM.render(
    <Router>
        <div>
            <Route render ={()=> < App />} path="/" />
            <Route render ={()=> < BasicState />} path="/hooks-state/basic-state" />
            <Route render ={()=> < MultipleState />} path="/hooks-state/multiple-state" />
            <Route render ={()=> < BasicEffect />} path="/hooks-effect/basic-effect" />
            <Route render ={()=> < FetchEffect />} path="/hooks-effect/fetch-effect" />
            <Route render ={()=> < AxiosEffect />} path="/hooks-effect/axios-effect" />
            <Route render ={()=> < ListenerEffect />} path="/hooks-effect/listener-effect" />
        </div>
    </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
