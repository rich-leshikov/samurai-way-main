import React from 'react';
import s from "./Dialogs.module.css"

type DialogsPropsType = {

}

export function Dialogs(props: DialogsPropsType) {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs__items}>
        <div className={`${s.dialog} ${s.active}`}>Dimych</div>
        <div className={s.dialog}>Victor</div>
        <div className={s.dialog}>Andrey</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog}>Sveta</div>
        <div className={s.dialog}>Valera</div>
      </div>
      <div className={s.dialogs__chats}>
        <div className={s.chat}>Hi!</div>
        <div className={s.chat}>What's good?</div>
        <div className={s.chat}>Yo!</div>
      </div>
    </div>
  );
}