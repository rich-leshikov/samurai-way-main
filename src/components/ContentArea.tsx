import React from 'react';

type ContentAreaPropsType = {

}

export function ContentArea(props: ContentAreaPropsType) {
  return (
    <div className="content-area">
      <div className="profile__image">
        <img src={require("./../img/venice.jpg")} alt=""/>
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
  );
}