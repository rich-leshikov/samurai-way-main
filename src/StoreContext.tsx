import React from 'react';
import {ActionsType} from './redux/store';
import {Store} from 'redux';
import {AppRootStateType} from './redux/redux-store';

export const StoreContext = React.createContext({} as Store<AppRootStateType, ActionsType>)
