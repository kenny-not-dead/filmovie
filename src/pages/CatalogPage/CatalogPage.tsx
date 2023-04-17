import { useState } from 'react';
import { Poster } from '../../components/poster/Poster';
import classes from './../MainPage/MainPage.module.scss';
import mainclasses from './CatalogPage.module.scss';
import { Select } from '../../components/catalog/Select';
import { FilterSelect } from '../../components/UI/Filter/FilterSelect';

export function CatalogPage() {
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

	const [catalog, setCatalog] = useState(posters)
	const [selectedSort, setSelectedSort] = useState('like')
  

	const sortCatalog = (sort: string) => {
	  setSelectedSort(sort)
	  if (sort === 'stars') {
		setCatalog([...catalog].sort( (a, b) => (a.score).localeCompare(b.score)))
	  }
	  else if (sort === 'abc') {
		setCatalog([...catalog].sort( (a, b) => (a.title).localeCompare(b.title)))
	  }
	}

	return (
		<>
			<div className={mainclasses.sortwrapper}>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-filter-right" viewBox="0 0 16 16">
					<path d="M14 10.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0 0 1h3a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0 0 1h7a.5.5 0 0 0 .5-.5zm0-3a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .5-.5z"/>
					</svg>
					<Select
					sortCatalog = {sortCatalog}
					value={selectedSort}
					option = {[
						{value: '', name: 'Сортировать', disabled: true},
						{value: 'like', name: 'По количеству оценок'},
						{value: 'stars', name: 'По рейтингу'},
						{value: 'date', name: 'По дате выхода'},
						{value: 'abc', name: 'По алфавиту'},
					]}/>
    		</div> 
			<div className={mainclasses.filterwrapper}>
				<FilterSelect name='Жанры' value="Ужасы"/>
				<FilterSelect name=' Страны' value="Россия"/>
			</div>

			<div className={classes.slider__block}>
				<div className={mainclasses.catalog}>
							{catalog.map((slide, index) => {
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
			</div>
		</>
	);
}
