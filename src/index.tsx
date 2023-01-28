import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store} from './redux/redux-store';
import {StoreContext} from './StoreContext';

const rerenderEntireTree = () => {
  ReactDOM.render(
    <StoreContext.Provider value={store}>
      <App/>
    </StoreContext.Provider>
    , document.getElementById('root')
  )
}

rerenderEntireTree()
store.subscribe(() => rerenderEntireTree())