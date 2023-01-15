import {v1} from 'uuid';

export type StoreType = {
  _state: RootStateType,
  _rerenderEntireTree: (state: RootStateType) => void,
  subscribe: (observer: () => void) => void, // Should I declare type for observer?
  getState: () => RootStateType,
  dispatch: (action: ActionsType) => void,
}

export type RootStateType = {
  newMessageFromTextarea: string,
  dialogPage: DialogPageType,
  profilePage: ProfilePageType,
}

export type ProfilePageType = {
  posts: Array<PostsType>,
}

export type DialogPageType = {
  dialogs: Array<DialogsType>,
  messages: Array<MessagesType>,
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
  ReturnType<typeof updateTextareaAC>
  | ReturnType<typeof addMessageAC>
  | ReturnType<typeof addPostAC>

const UPDATE_TEXTAREA = 'UPDATE-TEXTAREA'
const ADD_MESSAGE = 'ADD-MESSAGE'
const ADD_POST = 'ADD-POST'

export const updateTextareaAC = (userText: string) => ({type: UPDATE_TEXTAREA, newText: userText} as const)
export const addMessageAC = () => ({type: ADD_MESSAGE} as const)
export const addPostAC = () => ({type: ADD_POST} as const)

export const store: StoreType = {
  _state: {
    newMessageFromTextarea: '',
    dialogPage: {
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
      case UPDATE_TEXTAREA:
        this._state.newMessageFromTextarea = action.newText
        this._rerenderEntireTree(this._state)
        break
      case ADD_MESSAGE:
        const newMessage: MessagesType = {
          id: v1(),
          message: this._state.newMessageFromTextarea
        }
        this._state.dialogPage.messages.push(newMessage)
        this._state.newMessageFromTextarea = ''
        this._rerenderEntireTree(this._state)
        break
      case ADD_POST:
        const newPost: PostsType = {
          id: v1(),
          message: this._state.newMessageFromTextarea,
          likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.newMessageFromTextarea = ''
        this._rerenderEntireTree(this._state)
        break
    }
  }
}
