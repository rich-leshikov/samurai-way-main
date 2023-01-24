import {v1} from 'uuid';
import {DialogsActionsType, dialogsReducer} from './dialogs-reducer';
import {ProfileActionsType, profileReducer} from './profile-reducer';

export type ActionsType = ProfileActionsType | DialogsActionsType

export type StoreType = {
  _state: RootStateType,
  _rerenderEntireTree: (state: RootStateType) => void,
  subscribe: (observer: () => void) => void,
  getState: () => RootStateType,
  dispatch: (action: ActionsType) => void,
}

export type RootStateType = {
  dialogsPage: DialogPageType,
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

export const store: StoreType = {
  _state: {
    dialogsPage: {
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
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._rerenderEntireTree(this._state)
  }
}
