import Table from '../table/Table';
import { useAppSelector } from '../../hooks/redux-hooks';

export default function Admin() {
  const films = useAppSelector(state => state.film.films);

  return (
    <Table values={films} />
  );
}
