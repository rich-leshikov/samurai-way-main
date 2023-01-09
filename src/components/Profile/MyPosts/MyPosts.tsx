import React from 'react';
import {PostsType} from '../../../state/state';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MessageForm} from '../../EmbeddedModules/MessageForm';

type MyPostsPropsType = {
  postsData: Array<PostsType>,
  addPost: (message: string) => void,
}

export function MyPosts(props: MyPostsPropsType) {

  return (
    <div className={s.profile__posts}>
      <h3>My posts</h3>
      <div className="profile__new-post">
        <MessageForm addMessage={props.addPost}/>
      </div>
      <div className="profile__posts-feed">
        {
          props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
        }
      </div>
    </div>
  );
}