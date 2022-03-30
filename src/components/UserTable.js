import React, { useMemo, useState } from 'react'
import { useTable } from 'react-table'
import DATA from './DATA.json'
import { COLUMNS } from './Columns'
import './table.css'
import {getMemberInfo} from './UserDataGet.js';
import { getElementError } from '@testing-library/react'

function addRank(dados){
  var index = 1;
  while(index< dados.length+1){
    dados[index-1].rank=index
    index++;
  }
}

export default function UserTable ({dados})  {
  dados.sort((a,b) => (a.points < b.points) ? 1 : ((b.points < a.points) ? -1 : 0))
  addRank(dados)

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => dados, [])




  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  })

  return (
    <>
      <table class="user" {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      
    </>
  )
}