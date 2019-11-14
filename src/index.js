import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import {applyMiddleware , compose , combineReducers , createStore } from 'redux';
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancers = process.env.NODE_ENV === "development" ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers(
    {
       
    }
);

const appStore = createStore(rootReducer,composeEnhancers( applyMiddleware(thunk) ));

const newsApp = (
    <Provider store={appStore}>
        <Router>
            <App />
        </Router>
    </Provider>
);


ReactDOM.render(newsApp, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
