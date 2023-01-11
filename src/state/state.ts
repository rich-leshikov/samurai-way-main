import {v1} from 'uuid';
import {rerenderEntireTree} from '../render/render';

export type StateType = {
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

export const state: StateType = {
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
}

export const updateTextarea = (newText: string) => {
  state.newMessageFromTextarea = newText
  rerenderEntireTree(state)
}

// for useState
const addMessageUse = (messagesData: Array<MessagesType>, message: string) => {
  const newMessage: MessagesType = {
    id: v1(),
    message: message
  }

  messagesData = [...messagesData, newMessage]
}
const addPostUse = (postsData: Array<PostsType>, message: string) => {
  const newPost: PostsType = {
    id: v1(),
    message: message,
    likesCount: 0
  }

  postsData = [...postsData, newPost]
}

// for handly reloading state
export const addMessage = () => {
  const newMessage: MessagesType = {
    id: v1(),
    message: state.newMessageFromTextarea
  }

  state.dialogPage.messages.push(newMessage)
  state.newMessageFromTextarea = ''
  rerenderEntireTree(state)
}

export const addPost = () => {
  const newPost: PostsType = {
    id: v1(),
    message: state.newMessageFromTextarea,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost)
  state.newMessageFromTextarea = ''
  rerenderEntireTree(state)
}