import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type MyPostsPropsType = {}

export function MyPosts(props: MyPostsPropsType) {
  return (
    <div className="profile__posts">
      My posts
      <div className="profile__new-post">
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="profile__posts-feed">
        <Post message={"Today I'm playing guitar!"} likesCount={6}/>
        <Post message={'What a nice day!'} likesCount={5}/>
        <Post message={'Hello!'} likesCount={3}/>
      </div>
    </div>
  );
}