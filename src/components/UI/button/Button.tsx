import React from 'react'
import { FormattedMessage } from 'react-intl'
import classes from './Button.module.scss'

export default function Button(props:any) {
  return (
    <button className={classes.btn}> {props.id ? <p><FormattedMessage id={props.id} /> </p>: <img className={classes.icon} src={props.icon} alt={props.alt} />} </button>
  )
}
