import { Input } from '../UI/input/Input';
import classes from './Table.module.scss';
import { HeadTable } from './head/HeadTable';
import { RowTable } from './row/RowTable';
import search from './../../static/svgs/search.svg';
import { useEffect, useState } from 'react';

interface TableProps {
  values: Film[];
}

function Table({ values }: TableProps) {
  const [valuefindName, setValuefindName] = useState('');
  const [newValues, setNewValues] = useState(values);

  const onFilter = () => {
    let newData = [...values];
    if (valuefindName.length > 0) {
      setNewValues(
        newData.filter((item: any) => {
          if (
            item.filmLang[0].filmName
              .toLocaleLowerCase()
              .includes(valuefindName.toLocaleLowerCase())
          )
            return true;
        })
      );
    } else {
      setNewValues(values);
    }
  };

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.placeholder === 'Поиск по названию') {
      setValuefindName(e.target.value);
    }
  };

  useEffect(() => {
    onFilter();
  }, [valuefindName]);

  useEffect(() => {
    setNewValues([...values]);
  }, [values]);

  return (
    <div className={classes.table}>
      <Input
        placeholder='Поиск по названию'
        id=''
        icon={search}
        value={valuefindName}
        onChange={e => inputHandler(e)}
      />
      <HeadTable
        values={['ID', 'Название', 'Год', 'Жанры', 'Страны', 'Актеры']}
      />
      <div className={classes.content}>
        {newValues.map((value: any, index: number) => {
          return <RowTable film={value} key={index} />;
        })}
      </div>
    </div>
  );
}

export default Table;
