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

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path={'/feed'} component={Feed}/>
          <Route path={'/dialogs'} component={Dialogs}/>
          <Route path={'/audio'} component={Audio}/>
          <Route path={'/profile'} component={Profile}/>
          <Route path={'/settings'} component={Settings}/>
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
