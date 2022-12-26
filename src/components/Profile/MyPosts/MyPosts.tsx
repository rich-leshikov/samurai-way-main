import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {PostsDataType} from '../../../App';

type MyPostsPropsType = {
  postsData: Array<PostsDataType>,
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