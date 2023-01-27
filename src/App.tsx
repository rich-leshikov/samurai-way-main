import React from 'react';
import {Store} from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Footer} from './components/Footer/Footer';
import {Feed} from './components/Feed/Feed';
import {Audio} from './components/Audio/Audio';
import {Settings} from './components/Settings/Settings';
import {DialogsContainer} from './components/Dialogs/DialogsContainer';
import {Profile} from './components/Profile/Profile';

type AppPropsType = {
  store: Store
}

function App(props: AppPropsType) {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route
            path={'/feed'}
            render={() => <Feed/>}
          />
          <Route
            path={'/dialogs'}
            render={() => <DialogsContainer store={props.store}/>}
          />
          <Route
            path={'/audio'}
            render={() => <Audio/>}
          />
          <Route
            path={'/profile'}
            render={() => <Profile store={props.store}/>}
          />
          <Route
            path={'/settings'}
            render={() => <Settings/>}
          />
        </div>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
