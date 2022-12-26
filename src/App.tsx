import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from './components/Dialogs/Dialogs';
import {Feed} from './components/Feed/Feed';
import {Audio} from './components/Audio/Audio';
import {Settings} from './components/Settings/Settings';

export type DialogsDataType = {
  id: string,
  name: string
}

export type MessagesDataType = {
  id: string,
  message: string
}

export type PostsDataType = {
  id: string,
  message: string,
  likesCount: number
}

function App() {
  const dialogsData: Array<DialogsDataType> = [
    {id: '1', name: 'Dimych'},
    {id: '2', name: 'Victor'},
    {id: '3', name: 'Andrey'},
    {id: '4', name: 'Sasha'},
    {id: '5', name: 'Sveta'},
    {id: '6', name: 'Valera'},
    {id: '7', name: 'Igor'},
  ]

  const messagesData: Array<MessagesDataType> = [
    {id: '1', message: 'Hi!'},
    {id: '2', message: 'What\'s good?'},
    {id: '3', message: 'Yo!'},
  ]

  const postsData: Array<PostsDataType> = [
    {id: '1', message: 'Hello!', likesCount: 3},
    {id: '2', message: 'What a nice day!', likesCount: 5},
    {id: '3', message: "Today I'm playing guitar!", likesCount: 6},
  ]

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={'/feed'} render={() => <Feed/>}/>
          <Route path={'/dialogs'} render={() => <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>}/>
          <Route path={'/audio'} render={() => <Audio/>}/>
          <Route path={'/profile'} render={() => <Profile postsData={postsData}/>}/>
          <Route path={'/settings'} render={() => <Settings/>}/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
