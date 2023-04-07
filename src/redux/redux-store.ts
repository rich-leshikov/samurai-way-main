import {applyMiddleware, combineReducers, createStore, Store} from 'redux';
import {DialogsActionType, dialogsReducer} from './dialogs-reducer';
import {ProfileActionType, profileReducer} from './profile-reducer';
import {SearchActionType, searchReducer} from './search-reducer';
import {AuthActionType, authReducer} from './auth-reducer';
import thunkMiddleware, {ThunkAction} from 'redux-thunk';

let rootReducer = combineReducers({
  dialogsPage: dialogsReducer,
  profilePage: profileReducer,
  searchPage: searchReducer,
  auth: authReducer
})

export type AppStateType = ReturnType<typeof rootReducer>
export type ActionType = ProfileActionType | DialogsActionType | SearchActionType | AuthActionType
export type StoreType = Store<AppStateType, ActionType>
export type ThunkType = ThunkAction<void, AppStateType, unknown, ActionType>

export let store: StoreType = createStore(rootReducer, applyMiddleware(thunkMiddleware))