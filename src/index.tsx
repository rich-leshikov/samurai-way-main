import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
// add state to parameters??
const rerenderEntireTree = () => {
  ReactDOM.render(<App state={store.getState()} dispatch={store.dispatch}/>, document.getElementById('root'));
}

rerenderEntireTree()
store.subscribe(() => rerenderEntireTree())