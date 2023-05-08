import React, {ComponentType, Suspense} from 'react';
import {AppStateType} from '../redux/redux-store';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {Preloader} from '../components/common/Preloader/Preloader';


// type MapStatePropsType = {
//   isAuth: boolean
// }
//
//
// const mapStateToProps = (state: AppStateType): MapStatePropsType => {
//   return {
//     isAuth: state.auth.isAuth
//   }
// }


export function WithSuspense<T>(Component: ComponentType<T>) {
  return (props: any) => {
    return (
      <Suspense fallback={<Preloader/>}>
        <Component {...props}/>
      </Suspense>
    )
  }
}