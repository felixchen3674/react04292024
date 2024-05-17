import React, { useState } from 'react'
import CheckBox from '../CheckBox'

export interface Check {
  id: number,
  name: string,
  isChecked: boolean
}

const ListItems = [
    {id: 1, name: 'select1', isChecked: false},
    {id: 2, name: 'select2', isChecked: false},
    {id: 3, name: 'select3', isChecked: false},
    {id: 4, name: 'select4', isChecked: false}
  ]

export default function SelectAllForm() {
  const [list, setList] = useState<Check[]>(ListItems)
  let isSelectedAll = !list.some(element => !element.isChecked)

  const handleSelectAll = () => {
    const newCheckStatus = !isSelectedAll;
    setList(list.map(listItem => {
      return {...listItem, isChecked: newCheckStatus}
    }))
  }

  const handleSelect = (id: number) => {
    return () => {
      setList(list.map(listItem => {
        if (listItem.id === id) {
          listItem.isChecked = !listItem.isChecked;
        }
        return listItem;
      }))
    }
  }

  return (
    <>
      <h2>SelectAllForm</h2>
      <form>
        <label>
          <input 
            type='checkbox'
            checked={isSelectedAll}
            onChange={handleSelectAll}/>
          selectAll
        </label>
        {list.map(listItem => {
          return <CheckBox key={listItem.id} isChecked={listItem.isChecked} handleSelect={handleSelect(listItem.id)} name={listItem.name}/>
        })}
      </form>
    </>
  )
}
