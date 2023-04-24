import { useEffect, useState } from 'react';
import { Poster } from '../poster/Poster';
import classes from './Slider.module.scss';

interface SliderProps {
	slides: Slide[];
	size: 's' | 'm' | 'l';
	autoPlay: boolean;
	autoPlayTime: number;
}

export const Slider = ({ slides, size, autoPlay, autoPlayTime }: SliderProps) => {
	const [slideNumber, setSlideNumber] = useState(0);
	const [length, setLength] = useState(0);

	useEffect(() => {
		if (size === 's') setLength(Math.ceil(slides.length / 7));
		else if (size === 'm') setLength(Math.ceil(slides.length / 5));
		else setLength(slides.length);
	}, []);

	useEffect(() => {
		if (slideNumber < 0) setSlideNumber(slides.length - 1);
		if (slideNumber > slides.length - 1) setSlideNumber(0);
	}, [slideNumber, slides]);

	useEffect(() => {
		if (!autoPlay) return;
		const interval = setInterval(() => {
			setSlideNumber(prev => prev + 1);
		}, autoPlayTime);
		return () => {
			clearInterval(interval);
		};
	});

	return (
		<div
			className={classes.container}
			style={
				size === 'l'
					? {
							padding: '0px 10px 0px 10px',
					  }
					: {}
			}
		>
			<div
				className={size === 'l' ? classes.l__container : classes.sub__container}
				style={
					size === 's' || size === 'm'
						? {
								overflow: 'hidden',
								padding: '20px 0px 25px 5px',
						  }
						: {}
				}
			>
				<div
					className={classes.slide__list}
					style={
						size === 's' || size === 'm'
							? { transform: `translateX(-${slideNumber * 100}%)` }
							: {}
					}
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
						slides.map((slide, index) => {
							let position = 'next2';
							if (index === slideNumber) position = 'active';
							if (
								index === slideNumber - 1 ||
								(slideNumber === 0 && index === slides.length - 1)
							)
								position = 'last';
							if (
								index === slideNumber - 2 ||
								(slideNumber === 0 && index === slides.length - 2) ||
								(slideNumber === 1 && index === slides.length - 1)
							)
								position = 'last2';
							if (
								index === slideNumber + 1 ||
								(index === 0 && slideNumber === slides.length - 1)
							)
								position = 'next';
							return (
								<Poster
									size='l'
									title={slide.title}
									url={slide.url}
									position={position}
									description={slide.description}
									key={index}
								/>
							);
						})
					)}
				</div>
			</div>
			{(slideNumber !== 0 || size === 'l') && (
				<div
					style={size === 'l' ? { left: '-60px' } : {}}
					className={`${classes.arrow__left}`}
					onClick={() => setSlideNumber(prev => prev - 1)}
				/>
			)}
			{(slideNumber !== length - 1 || size === 'l') && (
				<div
					style={size === 'l' ? { right: '-60px' } : {}}
					className={`${classes.arrow__right}`}
					onClick={() => setSlideNumber(prev => prev + 1)}
				/>
			)}
		</div>
	);
}
