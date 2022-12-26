import React from 'react';
import s from './Audio.module.css'

type AudioPropsType = {

};

export function Audio(props: AudioPropsType) {
  return (
    <div className={s.audio}>
      Music
    </div>
  );
}