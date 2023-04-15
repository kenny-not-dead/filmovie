import React from 'react'
import classes from './Select.module.scss'


interface SelectProps {
    option: Option[]
    value: string;
}

type Option = {
    value: string;
    name: string
}

export function Select(props:SelectProps) {
    return(
        <div className={classes.wrapper}>
            <select className={classes.select}
                value = {props.value}
                //onChange = {event => props.onChange(event.target.value)}
            >
              {props.option.map( option => 
                <option className={classes.option} key={option.value} value={option.value}>
                    {option.name} 
                </option>
              )}
            </select>
        </div>
        )
}
