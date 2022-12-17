import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className={'header'}>
        <img src={require('./img/logo192.png')} alt="favicon"/>
      </header>
      <nav className={'navigation'}>
        <div className="nav-feed">
          <a>Feed</a>
        </div>
        <div className="nav-messages">
          <a>Messages</a>
        </div>
        <div className="nav-messages">
          <a>Music</a>
        </div>
        <div className="nav-profile">
          <a>Profile</a>
        </div>
        <div className="nav-settings">
          <a>Settings</a>
        </div>
      </nav>
      <div className="content-area">
        <div className="profile__image">
          <img src={require("./img/venice.jpg")} alt=""/>
        </div>
        <div className={"profile__description"}>
          avatar + desc
        </div>
        <div className="profile__posts">
          My posts
          <div className="profile__posts__new-post">
            New post
          </div>
          <div className="profile__posts__posts-feed">
            <div className="profile__posts__posts-feed__post">
              Post 1
            </div>
            <div className="profile__posts__posts-feed__post">
              Post 2
            </div>
            <div className="profile__posts__posts-feed__post">
              Post 3
            </div>
          </div>
        </div>
      </div>
      <footer className={'footer'}>
        Footer
      </footer>
    </div>
  );
}

export default App;
