import classes from './Poster.module.scss';
import bookmark from '../../static/svgs/bookmark.svg';
import star from '../../static/svgs/star.svg';
import block from '../../static/svgs/block.svg';
import magic from '../../static/svgs/magic.svg';

interface PosterProps {
	size: 's' | 'm' | 'l';
	title?: string;
	url: string;
	score?: string;
	info?: string;
	seasons?: string;
	description?: string;
	number?: string;
}

export const Poster = ({
	size,
	title,
	url,
	score,
	info,
	seasons,
	description,
	number
}: PosterProps) => {
	return size === 's' ? (
		<div className={classes.container__s}>
			<div className={classes.poster}>
				<img src={url} alt={title} />
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
	) : size === 'm' ? (
		<div className={classes.container__m}>
			<img src={url} className={classes.slide__image} alt={title} />
			<img src={number} className={classes.number} alt={title} />
			<div className={classes.shadow}></div>
		</div>
	) : (
		<div className={classes.container__l}>
			<div className={classes.info}>
				<h1 className={classes.name}>{title}</h1>
				<span className={classes.description}>{description}</span>
			</div>

			<img src={url} className={classes.slide__image} alt={title} />
		</div>
	);
};
