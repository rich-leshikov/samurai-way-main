import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {Feed} from './components/Feed/Feed';
import {Audio} from './components/Audio/Audio';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {SearchContainer} from './components/Search/SearchContainer';
import {ProfileContainer} from './components/Profile/ProfileContainer';
import {HeaderContainer} from './components/Header/HeaderContainer';
import {LoginPage} from './components/Login/LoginPage';


type AppPropsType = {}


function App(props: AppPropsType) {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderContainer/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={'/feed'} render={() => <Feed/>}/>
          <Route path={'/dialogs'} render={() => <DialogsContainer/>}/>
          <Route path={'/audio'} render={() => <Audio/>}/>
          <Route path={'/profile/:userId?'} render={() => <ProfileContainer/>}/>
          <Route path={'/search'} render={() => <SearchContainer/>}/>
          <Route path={'/settings'} render={() => <Settings/>}/>
          <Route path={'/login'} render={() => <LoginPage/>}/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
