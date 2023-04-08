import React from 'react';
import s from './LoginPage.module.css'


type LoginPropsType = {

}


export function LoginPage(props: LoginPropsType) {
  return (
    <div className={s.login}>
      <p>Ennyn Durin Aran Moria: pedo mellon a minno.</p>
      <p>Im Narvi hain echant: Celebrimbor o Eregion teithant i thiw hin.</p>
    </div>
  )
}