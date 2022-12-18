import React from 'react';

type HeaderPropsType = {

}

export function Header(props: HeaderPropsType) {
  return (
    <header className={'header'}>
      <img src={require('./../img/logo192.png')} alt="favicon"/>
    </header>
  );
}