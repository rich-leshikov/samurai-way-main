import React, {ComponentType, Suspense} from 'react';
import {Preloader} from '../components/common/Preloader/Preloader';


export function WithSuspense<T>(Component: ComponentType<T>) {
  return (props: any) => {
    return (
      <Suspense fallback={<Preloader/>}>
        <Component {...props}/>
      </Suspense>
    )
  }
}