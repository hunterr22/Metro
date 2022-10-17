import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { combineReducers } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import customers from './reducers/customers'
import formState from './reducers/formState'
import appState from './reducers/appState'
import events from './reducers/events'
import registrations from './reducers/registrations'
import login from './reducers/login';
import App from './App'
import * as serviceWorker from './serviceWorker';

const appReducer = combineReducers({formState,appState,customers, events, login, registrations})
let store = createStore( appReducer )

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();