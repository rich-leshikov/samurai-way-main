import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Footer} from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navbar/>
      <Profile/>
      <Footer/>
    </div>
  );
}

export default App;
