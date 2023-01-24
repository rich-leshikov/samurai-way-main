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
import {Dispatch} from 'redux';
import {AppRootStateType} from './redux/redux-store';

type AppPropsType = {
  state: AppRootStateType,
  dispatch: Dispatch
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
            render={() => <Dialogs
              dialogs={props.state.dialogsPage.dialogs}
              messages={props.state.dialogsPage.messages}
              newMessageFromTextarea={props.state.dialogsPage.newMessageFromTextarea}
              dispatch={props.dispatch}
            />}
          />
          <Route
            path={'/audio'}
            render={() => <Audio/>}
          />
          <Route
            path={'/profile'}
            render={() => <Profile
              posts={props.state.profilePage.posts}
              newPostFromTextarea={props.state.profilePage.newPostFromTextarea}
              dispatch={props.dispatch}
            />}
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
