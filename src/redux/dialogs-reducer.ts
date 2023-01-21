import {ActionsType, DialogPageType, MessagesType} from './store';
import {v1} from 'uuid';

export type DialogsActionsType = ReturnType<typeof updateMessageTextareaAC> | ReturnType<typeof addMessageAC>

export const UPDATE_MESSAGE_TEXTAREA = 'UPDATE-MESSAGE-TEXTAREA'
export const ADD_MESSAGE = 'ADD-MESSAGE'

export const updateMessageTextareaAC = (userText: string) => ({
  type: UPDATE_MESSAGE_TEXTAREA,
  newText: userText
} as const)
export const addMessageAC = () => ({type: ADD_MESSAGE} as const)

export const dialogsReducer = (state: DialogPageType, action: ActionsType) => {
  switch (action.type) {
    case UPDATE_MESSAGE_TEXTAREA:
      state.newMessageFromTextarea = action.newText
      return state
    case ADD_MESSAGE:
      const newMessage: MessagesType = {
        id: v1(),
        message: state.newMessageFromTextarea
      }
      state.messages.push(newMessage)
      state.newMessageFromTextarea = ''
      return state
    default:
      return state
  }
}