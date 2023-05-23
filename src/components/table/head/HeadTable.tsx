import classes from './HeadTable.module.scss'

interface HeadTableProps {
	values: Array<String>
}

export function HeadTable({values}: HeadTableProps) {
    return (
		<div className={classes.container}>
			{values.map((value, index) => {
				return (
					<div key={index}>
						<span>{value}</span>
					</div>
				);
			})}
		</div>
	);
}