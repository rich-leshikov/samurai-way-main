import React from 'react';
import s from './Profile.module.css'

type ProfilePropsType = {

}

export function Profile(props: ProfilePropsType) {
  return (
    <div className={s.profile}>
      <div className="profile__image">
        <img src={require("../../img/venice.jpg")} alt=""/>
      </div>
      <div className={"profile__description"}>
        avatar + desc
      </div>
      <div className="profile__posts">
        My posts
        <div className="profile__new-post">
          New post
        </div>
        <div className="profile__posts-feed">
          <div className="profile__post">
            Post 1
          </div>
          <div className="profile__post">
            Post 2
          </div>
          <div className="profile__post">
            Post 3
          </div>
        </div>
      </div>
    </div>
  );
}