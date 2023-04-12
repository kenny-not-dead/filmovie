import { useEffect, useState } from 'react';
import classes from './Slider.module.scss';

interface SliderProps {
	autoPlay: boolean;
	autoPlayTime: number;
}

const Slider = function ({ autoPlay, autoPlayTime }: SliderProps) {
	const [items, setItems] = useState<string[]>([]);
	const [slide, setSlide] = useState(2);

	useEffect(() => {
		function loadData() {
			setItems([
				'https://thumbs.dfs.ivi.ru/storage28/contents/0/6/f2058a5893cd51ca84fec7f149fcc3.jpg/1216x524/?q=85',
				'https://thumbs.dfs.ivi.ru/storage28/contents/0/6/f2058a5893cd51ca84fec7f149fcc3.jpg/1216x524/?q=85',
				'https://thumbs.dfs.ivi.ru/storage28/contents/0/6/f2058a5893cd51ca84fec7f149fcc3.jpg/1216x524/?q=85',
				'https://thumbs.dfs.ivi.ru/storage28/contents/0/6/f2058a5893cd51ca84fec7f149fcc3.jpg/1216x524/?q=85',
				'https://thumbs.dfs.ivi.ru/storage28/contents/0/6/f2058a5893cd51ca84fec7f149fcc3.jpg/1216x524/?q=85',
				'https://thumbs.dfs.ivi.ru/storage28/contents/0/6/f2058a5893cd51ca84fec7f149fcc3.jpg/1216x524/?q=85',
			]);
		}
		loadData();
	}, []);

	function changeSlide(direction = 1) {
		if (slide + direction < 0) {
			setSlide(items.length - 1);
		} else {
			setSlide((slide + direction) % items.length);
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
			<div
				className={classes.slide_list}
				style={{ transform: `translateX(-${slide * 100}%)` }}
			>
				{items.map((url, index) => (
					<div className={classes.slide} key={index}>
						<img src={url} className={classes.slide_image} alt='' />
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
