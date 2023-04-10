import React, {ComponentType} from 'react';
import {AppStateType} from '../redux/redux-store';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';


type MapStatePropsType = {
  isAuth: boolean
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}


export function WithAuthReducer<T>(Component: ComponentType<T>) {
  const RedirectComponent = (props: MapStatePropsType) => {
    let {isAuth, ...restProps} = props

    if (!isAuth) {
      return <Redirect to={'/login'}/>
    }

    return <Component {...restProps as T}/>
  }

  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent)
  return ConnectedRedirectComponent
}