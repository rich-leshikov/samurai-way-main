import {v1} from 'uuid';
import {ActionType} from './redux-store';

export type DialogsActionType = ReturnType<typeof updateMessageTextareaAC> | ReturnType<typeof addMessageAC>

export type DialogsPageType = {
  newMessageFromTextarea: string
  dialogs: Array<DialogType>
  messages: Array<MessageType>
}
export type DialogType = {
  id: string
  name: string
}
export type MessageType = {
  id: string
  message: string
}

export const UPDATE_MESSAGE_TEXTAREA = 'UPDATE-MESSAGE-TEXTAREA'
export const ADD_MESSAGE = 'ADD-MESSAGE'

export const updateMessageTextareaAC = (userText: string) => ({
  type: UPDATE_MESSAGE_TEXTAREA,
  newText: userText
} as const)
export const addMessageAC = () => ({type: ADD_MESSAGE} as const)

let initialState: DialogsPageType = { // need import DialogsPageType to this file?? + let or const??
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
}
// right returning of DialogsPageType??
export const dialogsReducer = (state: DialogsPageType = initialState, action: ActionType): DialogsPageType => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXTAREA:
      return {
        ...state,
        newMessageFromTextarea: action.newText
      } as DialogsPageType
    case ADD_MESSAGE:
      const newMessage: MessageType = {
        id: v1(),
        message: state.newMessageFromTextarea
      }
      return {
        ...state,
        newMessageFromTextarea: '',
        messages: [...state.messages, newMessage]
      } as DialogsPageType
    default:
      return state as DialogsPageType
  }
}