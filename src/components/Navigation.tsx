import React from 'react';

type NavigationPropsType = {

}

export function Navigation(props: NavigationPropsType) {
  return (
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
  );
}