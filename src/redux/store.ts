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

export type UpdateTextareaActionType = {
  type: "UPDATE-TEXTAREA",
  newText: string,
}

export type AddMessageActionType = {
  type: "ADD-MESSAGE"
}

export type AddPostActionType = {
  type: "ADD-POST"
}

export type ActionsType = UpdateTextareaActionType | AddMessageActionType | AddPostActionType

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
    if (action.type === 'UPDATE-TEXTAREA') {
      this._state.newMessageFromTextarea = action.newText
      this._rerenderEntireTree(this._state)
    } else if (action.type === 'ADD-MESSAGE') {
      const newMessage: MessagesType = {
        id: v1(),
        message: this._state.newMessageFromTextarea
      }

      this._state.dialogPage.messages.push(newMessage)
      this._state.newMessageFromTextarea = ''
      this._rerenderEntireTree(this._state)
    } else if (action.type === 'ADD-POST') {
      const newPost: PostsType = {
        id: v1(),
        message: this._state.newMessageFromTextarea,
        likesCount: 0
      }

      this._state.profilePage.posts.push(newPost)
      this._state.newMessageFromTextarea = ''
      this._rerenderEntireTree(this._state)
    }
  }
}
