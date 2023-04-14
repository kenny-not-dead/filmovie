import classes from './Title.module.scss'
import arrowSvg from '../../static/svgs/arrow.svg'

interface TitleProps {
	arrow: boolean
	title: string;
}

export function Title({arrow, title}: TitleProps) {
	return (
		<div className={classes.container}>
			<h2 className={classes.title}>{title}</h2>
			{arrow && <img src={arrowSvg} className={classes.arrow} alt="" />}
		</div>
	);
}