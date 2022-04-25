import React from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import { getUsers } from 'redux/ducks/users'

import { selectData } from './pageUserSelector'
import PageUserView from './PageUserView'

export type Gender = 'all' | 'male' | 'female'

const PageUserContainer = () => {
  const dispatch = useDispatch()
  const dataSelector = useSelector(selectData, shallowEqual)

  const [gender, setGender] = React.useState<Gender>('all')
  const [searchName, setSearchName] = React.useState('')

  React.useEffect(() => {
    dispatch(getUsers())
  }, [])

  const handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value as Gender)
    dispatch(getUsers({ gender: e.target.value, name: searchName, page: 1 }))
  }

  const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value)
  }

  const handleSearchName = () => {
    dispatch(getUsers({ name: searchName, gender, page: 1 }))
  }

  const handleResetFilter = () => {
    setGender('all')
    setSearchName('')
    dispatch(getUsers())
  }

  const newProps = {
    ...dataSelector,
    gender,
    searchName,
    handleResetFilter,
    handleChangeSearch,
    handleSearchName,
    handleGender,
  }

  return <PageUserView {...newProps} />
}

export default PageUserContainer
