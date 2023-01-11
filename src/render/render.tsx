import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import App from '../App';
import {addMessage, addPost, StateType, updateTextarea} from '../state/state';

export const rerenderEntireTree = (stateTree: StateType) => {
  ReactDOM.render(<App
    state={stateTree}
    updateTextarea={updateTextarea}
    addMessage={addMessage}
    addPost={addPost}
  />, document.getElementById('root'));
}