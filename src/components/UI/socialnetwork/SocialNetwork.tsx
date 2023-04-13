import classes from './SocialNetwork.module.scss';

export default function SocialNetwork(props: any) {
	return (
		<a className={classes.wrapper} href={props.href}>
			<img className={classes.icon} src={props.icon} alt={props.alt} />
		</a>
	);
}
