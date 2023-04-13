import React from 'react'
import { FormattedMessage } from 'react-intl'
import classes from './ButtonApp.module.scss'


export default function ButtonApp(props:any) {
  return (
    <button className={classes.btn}>
      <a href={props.href} >
          <img src={props.logo} alt="" />
            <div className={classes.btnappp}>
              <p className={classes.firstp}><FormattedMessage id={props.p1}/></p>
              <p> <FormattedMessage id={props.p2} /></p>
          </div>
      </a>

    </button>
  )
}
