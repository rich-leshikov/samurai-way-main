import React from 'react';
import s from './Footer.module.css'

type FooterPropsType = {

};

export function Footer(props: FooterPropsType) {
  return (
    <footer className={s.footer}>
      Footer
    </footer>
  );
}