import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Navigation} from './components/Navigation';
import {ContentArea} from './components/ContentArea';
import {Footer} from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Navigation/>
      <ContentArea/>
      <Footer/>
    </div>
  );
}

export default App;
