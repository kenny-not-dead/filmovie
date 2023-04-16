import React, { useState } from 'react'
import classes from './FilterSelect.module.scss'
import { Link } from 'react-router-dom'


interface FilterSelectType {
    name:string
    value?: string
}

export function FilterSelect(props:FilterSelectType) {

  const [chevron, setChevron] = useState(false)

  const showmenu = () => {
    setChevron((prevChevron => ! prevChevron))
  }

  return (
    <div onClick={showmenu} className={classes.wrapper}>
        <div className={classes.subwrapper}>
        <div>
            <h4>{props.name}</h4>
            <p>{props.value}</p> 
        </div>
            {chevron ?  
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894l6-3z"/>
                </svg> :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67z"/>
                </svg>}
        </div>
        {chevron?
        <div>
             <Link to='Sum'>
                 <p>{props.value}</p>
             </Link> 
        </div> : ''

        }

    </div>
  )
}
