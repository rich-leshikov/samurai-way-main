import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MessageForm} from '../../EmbeddedModules/MessageForm/MessageForm';
import {PostType} from '../../../redux/profile-reducer';

export type MyPostsPropsType = {
  posts: Array<PostType>
  newPostFromTextarea: string
  profile: any
  updatePostTextarea: (post: string) => void
  addPost: () => void
}

export function MyPosts(props: MyPostsPropsType) {
  const updatePost = (post: string) => props.updatePostTextarea(post)
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
          props.posts.map(p => (
            <Post
              key={p.id}
              message={p.message}
              likesCount={p.likesCount}
              profile={props.profile}
            />))
        }
      </div>
    </div>
  );
}