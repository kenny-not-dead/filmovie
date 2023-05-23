import classes from './Table.module.scss';
import { HeadTable } from './head/HeadTable';
import { RowTable } from './row/RowTable';

interface TableProps {
	values: any;
}

function Table({ values }: TableProps) {
	return (
		<div className={classes.table}>
			<HeadTable
				values={[
					'ID',
					'Название',
					'Год',
					'Жанры',
					'Страны',
					'Актеры',
					'Оценка'
				]}
			/>
			<div className={classes.content}>
				{values.map((value: any, index: number) => {
					return (
						<RowTable
							values={[
								value.id,
								value.filmLang[0].filmName,
								value.filmDate,
								value.genres
									.map((genre: any) => {
										return genre.name;
									})
									.join(', '),
								value.countries
									.map((countrie: any) => {
										return countrie.name;
									})
									.join(', '),
								value.actors
									.map((actor: any) => {
										return actor.name;
									})
									.join(', '),
								value.filmGrade
							]}
							key={index}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default Table;
