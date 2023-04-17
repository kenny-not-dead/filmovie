import { useEffect, useState } from 'react';
import { Poster } from '../poster/Poster';
import classes from './Slider.module.scss';

interface SliderProps {
	slides: Slide[];
	size: 's' | 'm' | 'l';
	autoPlay: boolean;
	autoPlayTime: number;
}

export function Slider({ slides, size, autoPlay, autoPlayTime }: SliderProps) {
	const [slide, setSlide] = useState(0);

	function changeSlide(direction = 1) {
		let length = 0;
		if (size === 's') length = Math.ceil(slides.length / 7);
		else if (size === 'm') length = Math.ceil(slides.length / 5);
		else length = slides.length;
		if (slide + direction < 0) {
			setSlide(length - 1);
		} else {
			setSlide((slide + direction) % length);
		}
	}

	useEffect(() => {
		if (!autoPlay) return;
		const interval = setInterval(() => {
			changeSlide(1);
		}, autoPlayTime);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div className={classes.container}>
			<div
				className={classes.subcontainer}
				style={size === 's' || size === 'm' ?{
					overflow: 'hidden',
					padding: '20px 5px 25px 5px',
				} : {}}
			>
				<div
					className={classes.slide__list}
					style={{ transform: `translateX(-${slide * 100}%)` }}
				>
					{size === 's' ? (
						<div className={classes.posters}>
							{slides.map((slide, index) => {
								return (
									<Poster
										size='s'
										title={slide.title}
										url={slide.url}
										score={slide.score}
										info={slide.info}
										seasons={slide.seasons}
										key={index}
									/>
								);
							})}
						</div>
					) : size === 'm' ? (
						<div className={classes.posters}>
							{slides.map((slide, index) => (
								<Poster
									size='m'
									url={slide.url}
									number={slide.number}
									key={index}
								/>
							))}
						</div>
					) : (
						slides.map((slide, index) => (
							<Poster
								size='l'
								title={slide.title}
								url={slide.url}
								description={slide.description}
								key={index}
							/>
						))
					)}
				</div>
			</div>
			<div className={classes.arrows}>
				<div
					className={`${classes.arrow} ${classes.left}`}
					onClick={() => changeSlide(-1)}
				/>
				<div
					className={`${classes.arrow} ${classes.right}`}
					onClick={() => changeSlide(1)}
				/>
			</div>
		</div>
	);
}
