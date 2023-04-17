import { Slider } from '../../components/slider/Slider';
import { Title } from '../../components/title/Title';
import { Button } from '../../components/UI/button/Button';
import classes from './MainPage.module.scss';

import one from '../../static/svgs/numbers/1.svg'
import two from '../../static/svgs/numbers/2.svg';
import three from '../../static/svgs/numbers/3.svg';
import four from '../../static/svgs/numbers/4.svg';
import five from '../../static/svgs/numbers/5.svg';
import six from '../../static/svgs/numbers/6.svg';
import seven from '../../static/svgs/numbers/7.svg';
import eigth from '../../static/svgs/numbers/8.svg';
import nine from '../../static/svgs/numbers/9.svg';
import ten from '../../static/svgs/numbers/10.svg';

const posters_l = [
	{
		title: 'Моя пиратская свадьба',
		url: 'https://thumbs.dfs.ivi.ru/storage29/contents/0/4/4d13b27d5730eeb087122d7ef6ff6e.jpg/1216x524/?q=85',
		description:
			'Пышную свадьбу на острове нарушает вторжение пиратов. Комедия с Дженнифер Лопес и Джошем Дюамелем',
	},
	{
		title: 'Все везде и сразу',
		url: 'https://thumbs.dfs.ivi.ru/storage28/contents/0/6/f2058a5893cd51ca84fec7f149fcc3.jpg/1216x524/?q=85',
		description:
			'Абсолютный триумфатор Оскара-2023, яркий, увлекательный, во всех смыслах фантастический',
	},
];

const posters_s = [
	{
		title: 'Губка боб',
		url: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
		score: '7,9',
		info: '1999-2021, США, Фентези',
		seasons: '13 сезонов',
	},
	{
		title: 'Титаник',
		url: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85',
		score: '8,6',
		info: '2012, Россия, Документальные',
		seasons: '1 сезон',
	},
	{
		title: 'Друзья',
		url: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85',
		score: '9,1',
		info: '1994-2004, США, Комедийные',
		seasons: '10 сезонов',
	},
	{
		title: 'Губка боб',
		url: 'https://thumbs.dfs.ivi.ru/storage2/contents/1/1/24e317e380f8a6bf033e25c3b47cc9.jpg/234x360/?q=85',
		score: '7,9',
		info: '1999-2021, США, Фентези',
		seasons: '13 сезонов',
	},
	{
		title: 'Титаник',
		url: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85',
		score: '8,6',
		info: '2012, Россия, Документальные',
		seasons: '1 сезон',
	},
	{
		title: 'Друзья',
		url: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85',
		score: '9,1',
		info: '1994-2004, США, Комедийные',
		seasons: '10 сезонов',
	},
	{
		title: 'Титаник',
		url: 'https://thumbs.dfs.ivi.ru/storage23/contents/8/5/d8d2fea60b6a57adb2d25a76499f58.jpg/234x360/?q=85',
		score: '8,6',
		info: '2012, Россия, Документальные',
		seasons: '1 сезон',
	},
	{
		title: 'Друзья',
		url: 'https://thumbs.dfs.ivi.ru/storage8/contents/e/6/071e0668ff2d48216b7967891ca39f.jpg/234x360/?q=85',
		score: '9,1',
		info: '1994-2004, США, Комедийные',
		seasons: '10 сезонов',
	},
];

const posters_m = [
	{
		url: 'https://thumbs.dfs.ivi.ru/storage4/contents/2/c/3b8e2a957b926355725e1237e188bf.jpg/304x620//?q=85',
		number: one,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage28/contents/f/2/7e50d51661b729863f8584ee559242.jpg/304x620//?q=85',
		number: two,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage26/contents/a/1/56b0cedeb8dd5890ee46ab947c1207.jpg/304x620//?q=85',
		number: three,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage28/contents/d/e/f3afc43a0709ea1ebf35cdf142cc46.jpg/304x620//?q=85',
		number: four,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage5/contents/9/9/f92d6d3965cfcb7b7e1878eaa56f05.jpg/304x620//?q=85',
		number: five,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage3/contents/0/9/09f0b7761bcd8ceb9c42bb93f4806c.jpg/304x620//?q=85',
		number: six,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage9/contents/8/0/86ca0a529c83b35c0b0f2b29a0fa57.jpg/304x620//?q=85',
		number: seven,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage29/contents/1/9/2475ddbdc646eb062cc61cb73db2a8.jpg/304x620//?q=85',
		number: eigth,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage6/contents/e/0/08c76a2df45108ec28af6300cc5b93.jpg/304x620//?q=85',
		number: nine,
	},
	{
		url: 'https://thumbs.dfs.ivi.ru/storage33/contents/b/2/661be4b1a65157bb5440ffc3bbeb06.jpg/304x620//?q=85',
		number: ten,
	},
];

export function MainPage() {
	return (
		<div className={classes.container}>
			<Slider
				slides={posters_l}
				size='l'
				autoPlay={false}
				autoPlayTime={5000}
			/>
			<div className={classes.loyalty__buttons}>
				<Button id='30 дней подписки за 1 ₽' className='free__btn' />
				<Button id='Активировать сертификат' className='sertificate__btn' />
			</div>
			<div className={classes.slider__block}>
				<Title top={false} arrow={true} title={'Рекомендую посмотреть'} />
				<Slider
					slides={posters_s}
					size='s'
					autoPlay={false}
					autoPlayTime={5000}
				/>
			</div>
			<div className={classes.slider__block}>
				<Title top={true} arrow={false} title={'за неделю'} />
				<Slider
					slides={posters_m}
					size='m'
					autoPlay={false}
					autoPlayTime={5000}
				/>
			</div>
		</div>
	);
}
