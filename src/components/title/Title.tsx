import classes from './Title.module.scss'
import arrowSvg from '../../static/svgs/arrow.svg'
import topSvg from '../../static/svgs/top.svg'

interface TitleProps {
	top?: boolean;
	arrow: boolean
	title: string;
}

export function Title({top, arrow, title}: TitleProps) {
	return (
		<div className={classes.container}>
			{top && <img src={topSvg} className={classes.top} alt='' />}
			<h2 className={classes.title} style={top ? {lineHeight: '30px'} : {}}>{title}</h2>
			{arrow && <img src={arrowSvg} className={classes.arrow} alt='' />}
		</div>
	);
}