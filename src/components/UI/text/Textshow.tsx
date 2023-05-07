import React, { useState } from 'react'
import classes from './Textshow.module.scss'

export interface TextProps {
  number: any
  text: string
  open?: string
  close?: string
}

export function TextShow(props: TextProps) {
  const [number, setNumber] = useState(props.number)

  const setAll = (number: Number) => {
    if (number == props.number) {
      setNumber(Infinity)
    } else {
      setNumber(props.number)
    }
  }

  return (
    <div className={classes.wraper}>
      <p>
        {props.text.slice(0, number)}
        {number == props.number ? '...' : ''}{' '}
      </p>
      <p className={classes.showall} onClick={() => setAll(number)}>
        {number == props.number
          ? props.open || 'Развернуть'
          : props.close || 'Свернуть'}
      </p>
    </div>
  )
}
