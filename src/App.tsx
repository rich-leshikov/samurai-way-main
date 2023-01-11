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
import {StateType} from './state/state';

type AppPropsType = {
  state: StateType,
  updateTextarea: (message: string) => void,
  addMessage: () => void,
  addPost: () => void,
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
              dialogs={props.state.dialogPage.dialogs}
              messages={props.state.dialogPage.messages}
              newMessageFromTextarea={props.state.newMessageFromTextarea}
              updateTextarea={props.updateTextarea}
              addMessage={props.addMessage}
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
              newMessageFromTextarea={props.state.newMessageFromTextarea}
              updateTextarea={props.updateTextarea}
              addPost={props.addPost}
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
