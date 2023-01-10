import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import {addMessage, addPost, StateType} from '../state/state';

export const rerenderEntireTree = (stateTree: StateType) => {
  ReactDOM.render(<App
    state={stateTree}
    addMessage={addMessage}
    addPost={addPost}
  />, document.getElementById('root'));
}