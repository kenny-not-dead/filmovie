import React from 'react'
import { FormattedMessage } from 'react-intl'
import classes from './Button.module.scss'

export interface BtnProps {
  className?: string
  id?: string
  src?: string
  alt?: string
  icon?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Button = ({
  className = classes.btn,
  id = 'Button',
  onClick,
  ...props
}: BtnProps) => {
  return (
		<button onClick={onClick} className={classes[className] || classes.btn}>
			{id ? (
				<p>
					{/*<FormattedMessage id={id} />{' '}*/}
					{id}
				</p>
			) : (
				<img className={classes.icon} src={undefined} alt='icon' />
			)}
		</button>
	);
}
