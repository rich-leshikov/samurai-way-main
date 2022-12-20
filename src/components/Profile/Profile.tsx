import React from 'react';
import s from './Profile.module.css'
import {MyPosts} from './MyPosts/MyPosts';

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
      <MyPosts/>
    </div>
  );
}