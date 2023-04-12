
import { FormattedMessage } from 'react-intl';
import classes from './Aitem.module.scss'

export default function Aitem(props:any) {

  return (
    <div className={classes.wrapper}>
        <a href={props.item.href}>
            <FormattedMessage id={props.item.id} />
        </a>  
    </div>
  )
}   
