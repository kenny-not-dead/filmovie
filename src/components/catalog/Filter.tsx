import React, {useState} from 'react'
import { Select } from './Select'

export function Filter() {


  const [selectedSort, setSelectedSort] = useState('like')
  

  const sortCatalog = (sort: string) => {
    setSelectedSort(sort)
    if (sort === 'stars') {
      alert('sdf')
    }

    /*
    if (sort === 'name') {
      setValue([...catalog].sort( (a, b) => (a.name).localeCompare(b.name)))
    } else if (sort === 'price') {
      setValue([...catalog].sort( (a, b) => a.price - b.price))
    }
    */
  }
  

  return (
    <div>
        <Select 
          sortCatalog = {sortCatalog}
          value={selectedSort}
          option = {[
            {value: 'like', name: 'По количеству оценок'},
            {value: 'stars', name: 'По рейтингу'},
            {value: 'date', name: 'По дате выхода'},
            {value: 'abc', name: 'По алфавиту'},
             ]}/>

    </div> 
  )
}

