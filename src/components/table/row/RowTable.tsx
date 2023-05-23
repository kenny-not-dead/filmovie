import classes from './RowTable.module.scss';
import save from '../../../static/svgs/save.svg';
import del from '../../../static/svgs/delete.svg';

interface RowTableProps {
	values: Array<String>;
}

export function RowTable({ values }: RowTableProps) {
	return (
		<div className={classes.container}>
			{values.map((value, index) => {
				return (
					<div className={classes.row} key={index}>
						<input value={String(value)} />
					</div>
				);
			})}
			<div className={classes.buttons}>
				<img src={save} alt='save' />
				<img src={del} alt='delete' />
			</div>
		</div>
	);
}
