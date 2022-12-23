import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';
import {Dialogs} from './components/Dialogs/Dialogs';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-css">
        <Profile/>
        {/*<Dialogs/>*/}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
