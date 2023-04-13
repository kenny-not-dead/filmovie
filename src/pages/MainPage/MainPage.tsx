import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Slider from '../../components/slider/Slider'

const mainSlides = [
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

const posters = [
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

function MainPage() {
	return (
		<>
			<Header />
			<Slider slides={mainSlides} posters={false} autoPlay={false} autoPlayTime={5000} />
			<Slider slides={posters} posters={true} autoPlay={false} autoPlayTime={5000} />
			<Footer />
		</>
	);
}

export default MainPage