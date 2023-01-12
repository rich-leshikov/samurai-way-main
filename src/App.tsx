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
import {StoreType} from './redux/store';

type AppPropsType = {
  store: StoreType
}

function App(props: AppPropsType) {
  const state = props.store.getState()

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
              dialogs={state.dialogPage.dialogs}
              messages={state.dialogPage.messages}
              newMessageFromTextarea={state.newMessageFromTextarea}
              updateTextarea={props.store.updateTextarea.bind(props.store)}
              addMessage={props.store.addMessage.bind(props.store)}
            />}
          />
          <Route
            path={'/audio'}
            render={() => <Audio/>}
          />
          <Route
            path={'/profile'}
            render={() => <Profile
              posts={state.profilePage.posts}
              newMessageFromTextarea={state.newMessageFromTextarea}
              updateTextarea={props.store.updateTextarea.bind(props.store)}
              addPost={props.store.addPost.bind(props.store)}
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
