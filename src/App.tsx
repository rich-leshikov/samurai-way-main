import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Header/>
          <Navbar/>
          <div className="app-wrapper-content">
            <Route path={'/dialogs'} component={Dialogs}/>
            <Route path={'/profile'} component={Profile}/>
            {/*<Profile/>*/}
            {/*<Dialogs/>*/}
          </div>
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
