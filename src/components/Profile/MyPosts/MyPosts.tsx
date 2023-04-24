import React from 'react';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MessageDataType, MessageReduxForm} from '../../EmbeddedModules/MessageForm/MessageForm';
import {PostType} from '../../../redux/profile-reducer';


export type MyPostsPropsType = {
  posts: Array<PostType>
  profile: any
  addPost: (postText: string) => void
}


export function MyPosts(props: MyPostsPropsType) {
  const addPost = (formData: MessageDataType) => props.addPost(formData.message)

  return (
    <div className={s.profile__posts}>
      <h3>My posts</h3>
      <div className="profile__new-post">
        <MessageReduxForm onSubmit={addPost}/>
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
  )
}