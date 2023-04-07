import {v1} from 'uuid';
import {ActionType, ThunkType} from './redux-store';
import {profileAPI} from '../api/api';


export type ProfileActionType = ReturnType<typeof updatePostTextarea>
  | ReturnType<typeof addPost>
  | ReturnType<typeof setUserProfile>
export type ProfilePageType = {
  posts: Array<PostType>
  newPostFromTextarea: string
  profile: any
}
export type PostType = {
  id: string
  message: string
  likesCount: number
}


export const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA'
export const ADD_POST = 'ADD-POST'
export const SET_USER_PROFILE = 'SET-USER-PROFILE'


export const updatePostTextarea = (userText: string) => ({type: UPDATE_POST_TEXTAREA, newText: userText} as const)
export const addPost = () => ({type: ADD_POST} as const)
export const setUserProfile = (profile: any) => ({type: SET_USER_PROFILE, profile} as const)

export const getUserProfile = (userId: string): ThunkType => {
  return (dispatch, getState) => {
    profileAPI.getUserProfile(userId)
      .then((data) => {
        dispatch(setUserProfile(data))
      })
  }
}


let initialState: ProfilePageType = {
  newPostFromTextarea: '',
  posts: [
    {id: v1(), message: 'Today I\'m playing guitar!', likesCount: 6},
    {id: v1(), message: 'What a nice day!', likesCount: 5},
    {id: v1(), message: 'Hello!', likesCount: 3},
  ],
  profile: null
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionType): ProfilePageType => {
  switch (action.type) {
    case UPDATE_POST_TEXTAREA:
      return {
        ...state,
        newPostFromTextarea: action.newText
      } as ProfilePageType
    case ADD_POST:
      const newPost: PostType = {
        id: v1(),
        message: state.newPostFromTextarea,
        likesCount: 0
      }
      return {
        ...state,
        newPostFromTextarea: '',
        posts: [newPost, ...state.posts]
      } as ProfilePageType
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      }
    default:
      return state as ProfilePageType
  }
}