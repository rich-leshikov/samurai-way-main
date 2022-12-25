import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';

type PostsDataType = {
  id: string,
  message: string,
  likesCount: number
}

type MyPostsPropsType = {}

export function MyPosts(props: MyPostsPropsType) {
  const postsData: Array<PostsDataType> = [
    {id: '1', message: 'Hello!', likesCount: 3},
    {id: '2', message: 'What a nice day!', likesCount: 5},
    {id: '3', message: "Today I'm playing guitar!", likesCount: 6},
  ]

  return (
    <div className="profile__posts">
      My posts
      <div className="profile__new-post">
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className="profile__posts-feed">
        {
          postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
        }
      </div>
    </div>
  );
}