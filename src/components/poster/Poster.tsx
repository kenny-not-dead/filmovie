import classes from './Poster.module.scss';
import bookmark from '../../static/svgs/bookmark.svg';
import star from '../../static/svgs/star.svg';
import block from '../../static/svgs/block.svg';
import magic from '../../static/svgs/magic.svg';

interface PosterProps {
	title: string;
	url: string;
	score: string | undefined;
	info: string | undefined;
	seasons: string | undefined;
}

function Poster({title, url, score, info, seasons}: PosterProps) {
	return (
		<div className={classes.container}>
			<div className={classes.poster}>
				<img
					src={url}
					alt=''
				/>
			</div>
			<div className={classes.properties}>
				<div className={classes.head}>
					<span className={classes.score}>{score}</span>
					<div className={classes.buttons}>
						<img src={bookmark} alt='' />
						<img src={star} alt='' />
						<img src={magic} alt='' />
						<img src={block} alt='' />
					</div>
				</div>
				<div className={classes.info}>
					<span>{info}</span>
					<span>{seasons}</span>
				</div>
			</div>
			<span className={classes.name}>{title}</span>
		</div>
	);
}

export default Poster;
