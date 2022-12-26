import React from 'react';
import { PostsType } from '../../../state/state';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type MyPostsPropsType = {
  postsData: Array<PostsType>,
}

export function MyPosts(props: MyPostsPropsType) {

  return (
    <div className={s.profile__posts}>
      My posts
      <div className="profile__new-post">
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="profile__posts-feed">
        {
          props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
        }
      </div>
    </div>
  );
}