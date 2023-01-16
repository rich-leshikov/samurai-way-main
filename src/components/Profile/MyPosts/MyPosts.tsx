import React from 'react';
import {ActionsType, addPostAC, PostsType, updatePostTextareaAC} from '../../../redux/store';
import s from './MyPosts.module.css'
import {Post} from './Post/Post';
import {MessageForm} from '../../EmbeddedModules/MessageForm';

type MyPostsPropsType = {
  postsData: Array<PostsType>,
  newPostFromTextarea: string,
  dispatch: (action: ActionsType) => void,
}

export function MyPosts(props: MyPostsPropsType) {
  const updatePost = (post: string) => {
    props.dispatch(updatePostTextareaAC(post))
  }

  const addPost = () => props.dispatch(addPostAC())

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