import {ActionsType, PostsType, ProfilePageType, RootStateType} from './store';
import {v1} from 'uuid';

export type ProfileActionsType = ReturnType<typeof updatePostTextareaAC> | ReturnType<typeof addPostAC>

export const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA'
export const ADD_POST = 'ADD-POST'

export const updatePostTextareaAC = (userText: string) => ({type: UPDATE_POST_TEXTAREA, newText: userText} as const)
export const addPostAC = () => ({type: ADD_POST} as const)

let initialState: ProfilePageType = {
  newPostFromTextarea: '',
  posts: [
    {id: v1(), message: 'Hello!', likesCount: 3},
    {id: v1(), message: 'What a nice day!', likesCount: 5},
    {id: v1(), message: 'Today I\'m playing guitar!', likesCount: 6},
  ]
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
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