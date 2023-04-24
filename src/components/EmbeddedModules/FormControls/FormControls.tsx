import React from 'react';
import s from './FormControls.module.css'


const FormControl = ({input, meta, ...props}: any) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={`${s.formControl} ${hasError && s.error}`}>
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}

export const Textarea = (props: any) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props: any) => {
  const {input, meta, ...restProps} = props
  return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}