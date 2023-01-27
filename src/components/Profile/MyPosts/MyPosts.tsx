import React from 'react';
import {PostsType} from '../../../redux/store';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MessageForm} from '../../EmbeddedModules/MessageForm';

type MyPostsPropsType = {
  postsData: Array<PostsType>,
  newPostFromTextarea: string,
  updatePost: (post: string) => void,
  addPost: () => void,
}

export function MyPosts(props: MyPostsPropsType) {
  const updatePost = (post: string) => props.updatePost(post)

  const addPost = () => props.addPost()

  return (
    <div className={s.profile__posts}>
      <h3>My posts</h3>
      <div className="profile__new-post">
        <MessageForm
          newMessageFromTextarea={props.newPostFromTextarea}
          updateTextarea={updatePost}
          addMessage={addPost}
        />
      </div>
      <div className="profile__posts-feed">
        {
          props.postsData.map(p => <Post message={p.message} likesCount={p.likesCount}/>)
        }
      </div>
    </div>
  );
}