import {combineReducers, createStore, Store} from 'redux';
import {dialogsReducer} from './dialogs-reducer';
import {profileReducer} from './profile-reducer';
import {ActionsType} from './store';

export type StoreType = Store<AppRootStateType, ActionsType>

let reducers = combineReducers({ // need typing??
  dialogsPage: dialogsReducer,
  profilePage: profileReducer
})

export let store: StoreType = createStore(reducers)

export type AppRootStateType = ReturnType<typeof reducers>
