import {v1} from 'uuid';

export type StoreType = {
  _state: RootStateType,
  _rerenderEntireTree: (state: RootStateType) => void,
  subscribe: (observer: () => void) => void, // Should I declare type for observer?
  getState: () => RootStateType,
  dispatch: (action: ActionsType) => void,
}

export type RootStateType = {
  dialogPage: DialogPageType,
  profilePage: ProfilePageType,
}

export type DialogPageType = {
  newMessageFromTextarea: string,
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>,
}

export type ProfilePageType = {
  newPostFromTextarea: string,
  posts: Array<PostsType>,
}

export type DialogsType = {
  id: string,
  name: string
}

export type MessagesType = {
  id: string,
  message: string
}

export type PostsType = {
  id: string,
  message: string,
  likesCount: number
}

export type ActionsType =
  ReturnType<typeof updateMessageTextareaAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof updatePostTextareaAC>
  | ReturnType<typeof addPostAC>

const UPDATE_MESSAGE_TEXTAREA = 'UPDATE-MESSAGE-TEXTAREA'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_POST_TEXTAREA = 'UPDATE-POST-TEXTAREA'
const ADD_POST = 'ADD-POST'

export const updateMessageTextareaAC = (userText: string) => ({type: UPDATE_MESSAGE_TEXTAREA, newText: userText} as const)
export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const updatePostTextareaAC = (userText: string) => ({type: UPDATE_POST_TEXTAREA, newText: userText} as const)
export const addPostAC = () => ({type: ADD_POST} as const)

export const store: StoreType = {
  _state: {
    dialogPage: {
      newMessageFromTextarea: '',
      dialogs: [
        {id: v1(), name: 'Dimych'},
        {id: v1(), name: 'Victor'},
        {id: v1(), name: 'Andrey'},
        {id: v1(), name: 'Sasha'},
        {id: v1(), name: 'Sveta'},
        {id: v1(), name: 'Valera'},
        {id: v1(), name: 'Igor'},
      ],
      messages: [
        {id: v1(), message: 'Hi!'},
        {id: v1(), message: 'What\'s good?'},
        {id: v1(), message: 'Yo!'},
      ],
    },
    profilePage: {
      newPostFromTextarea: '',
      posts: [
        {id: v1(), message: 'Hello!', likesCount: 3},
        {id: v1(), message: 'What a nice day!', likesCount: 5},
        {id: v1(), message: 'Today I\'m playing guitar!', likesCount: 6},
      ]
    },
  },
  _rerenderEntireTree() {
  },
  subscribe(observer: () => void) {
    this._rerenderEntireTree = observer
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    switch (action.type) {
      case UPDATE_MESSAGE_TEXTAREA:
        this._state.dialogPage.newMessageFromTextarea = action.newText
        this._rerenderEntireTree(this._state)
        break
      case ADD_MESSAGE:
        const newMessage: MessagesType = {
          id: v1(),
          message: this._state.dialogPage.newMessageFromTextarea
        }
        this._state.dialogPage.messages.push(newMessage)
        this._state.dialogPage.newMessageFromTextarea = ''
        this._rerenderEntireTree(this._state)
        break
      case UPDATE_POST_TEXTAREA:
        this._state.profilePage.newPostFromTextarea = action.newText
        this._rerenderEntireTree(this._state)
        break
      case ADD_POST:
        const newPost: PostsType = {
          id: v1(),
          message: this._state.profilePage.newPostFromTextarea,
          likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostFromTextarea = ''
        this._rerenderEntireTree(this._state)
        break
    }
  }
}
