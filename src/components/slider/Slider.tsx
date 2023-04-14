import { useEffect, useState } from 'react';
import Poster from '../poster/Poster';
import classes from './Slider.module.scss';

interface SliderProps {
	slides: Slide[];
	posters: boolean;
	autoPlay: boolean;
	autoPlayTime: number;
}

export function Slider({
	slides,
	posters,
	autoPlay,
	autoPlayTime,
}: SliderProps) {
	const [slide, setSlide] = useState(0);

	function changeSlide(direction = 1) {
		let length = 0;
		if (posters) length = Math.ceil(slides.length / 7);
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
				style={{
					overflow: posters ? 'hidden' : '',
					padding: posters ? '20px 5px 25px 5px' : '0',
				}}
			>
				<div
					className={classes.slide_list}
					style={{ transform: `translateX(-${slide * 100}%)` }}
				>
					{posters ? (
						<div className={classes.posters}>
							{slides.map((slide, index) => {
								return (
									<Poster
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
					) : (
						slides.map((slide, index) => (
							<div className={classes.slide} key={index}>
								<div className={classes.info}>
									<h1 className={classes.name}>{slide.title}</h1>
									<span className={classes.description}>
										{slide.description}
									</span>
								</div>

								<img
									src={slide.url}
									className={classes.slide_image}
									alt={slide.title}
								/>
							</div>
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
};
