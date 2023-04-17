import React from 'react'
import { FormattedMessage } from 'react-intl'
import classes from './Button.module.scss'

export interface BtnProps {
  className?: string
  id?: string
  src?: any
  alt?: string
  icon?: string
  onClick?: React.MouseEventHandler<HTMLElement>
}

export const Button = ({
  className = classes.btn,
  id,
  src,
  onClick,
  ...props
}: BtnProps) => {
  return (
		<button onClick={onClick} className={classes[className] || classes.btn}>
			{id ? (
				<p>
					<FormattedMessage id={id} />
				</p>
			) : (
				<img className={classes.icon} src={src} alt='icon' />
			)}
		</button>
	);
}
