import {ActionsType, PostsType, ProfilePageType} from './store';
import {v1} from 'uuid';

export type ProfileActionsType = ReturnType<typeof updatePostTextareaAC> | ReturnType<typeof addPostAC>

export const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA'
export const ADD_POST = 'ADD-POST'

export const updatePostTextareaAC = (userText: string) => ({type: UPDATE_POST_TEXTAREA, newText: userText} as const)
export const addPostAC = () => ({type: ADD_POST} as const)

export const profileReducer = (state: ProfilePageType, action: ActionsType) => {
  switch (action.type) {
    case UPDATE_POST_TEXTAREA:
      state.newPostFromTextarea = action.newText
      return state
    case ADD_POST:
      const newPost: PostsType = {
        id: v1(),
        message: state.newPostFromTextarea,
        likesCount: 0
      }
      state.posts.push(newPost)
      state.newPostFromTextarea = ''
      return state
    default:
      return state
  }
}