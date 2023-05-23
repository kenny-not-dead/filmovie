import React from 'react'
import Table from '../table/Table'
import { catalogData } from '../../store/data';

export default function Admin() {
  return <Table values={catalogData} />;
}
