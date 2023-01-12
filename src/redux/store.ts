import {v1} from 'uuid';

export type StoreType = {
  _state: RootStateType,
  getState: () => RootStateType,
  rerenderEntireTree: (state: RootStateType) => void,
  subscribe: (observer: () => void) => void, // Should I declare type for observer?
  updateTextarea: (newText: string) => void,
  addMessage: () => void,
  addPost: () => void,
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
  getState() {
    return this._state
  },
  rerenderEntireTree() {
  },
  subscribe(observer: () => void) {
    this.rerenderEntireTree = observer
  },
  updateTextarea(newText: string) {
    this._state.newMessageFromTextarea = newText
    this.rerenderEntireTree(this._state)
  },
  addMessage() {
    const newMessage: MessagesType = {
      id: v1(),
      message: this._state.newMessageFromTextarea
    }

    this._state.dialogPage.messages.push(newMessage)
    this._state.newMessageFromTextarea = ''
    this.rerenderEntireTree(this._state)
  },
  addPost() {
    const newPost: PostsType = {
      id: v1(),
      message: this._state.newMessageFromTextarea,
      likesCount: 0
    }

    this._state.profilePage.posts.push(newPost)
    this._state.newMessageFromTextarea = ''
    this.rerenderEntireTree(this._state)
  }
}

// for useState
// const addMessageUse = (messagesData: Array<MessagesType>, message: string) => {
//   const newMessage: MessagesType = {
//     id: v1(),
//     message: message
//   }
//
//   messagesData = [...messagesData, newMessage]
// }
// const addPostUse = (postsData: Array<PostsType>, message: string) => {
//   const newPost: PostsType = {
//     id: v1(),
//     message: message,
//     likesCount: 0
//   }
//
//   postsData = [...postsData, newPost]
// }
