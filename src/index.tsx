import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessage, addPost, state} from './state/state';

ReactDOM.render(<App state={state} addMessage={addMessage} addPost={addPost}/>, document.getElementById('root'));