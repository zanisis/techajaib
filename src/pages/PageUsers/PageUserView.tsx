import React from 'react'
import dayjs from 'dayjs'
import styled from 'styled-components'

import Pagination from 'components/pagination'
import type { PropsFromSelector } from './pageUserSelector'
import type { Gender } from './PageUserContainer'

const Container = styled.div`
  height: 100vh;
  padding: 8px;
`

const Action = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  padding: 4px 8px;
`

const SectionAction = styled.div`
  margin-right: 8px;
  min-width: 10rem;
`

const DataTable = styled.div`
  margin-top: 12px;
`

const ContentPagination = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 8px 14px;
`

type PageUserViewProps = {
  gender: Gender
  searchName: string
  handleResetFilter: () => void
  handleSearchName: () => void
  handleChangeSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleGender: (e: React.ChangeEvent<HTMLSelectElement>) => void
} & PropsFromSelector

const PageUserView = ({
  results,
  page,
  data,
  isLoading,
  gender,
  searchName,
  handleResetFilter,
  handleChangeSearch,
  handleSearchName,
  handleGender,
}: PageUserViewProps) => (
  <Container>
    <Action>
      <SectionAction>
        <span>Search</span>
        <div className="input-group mt-1">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={searchName}
            onChange={handleChangeSearch}
          />
          <button
            onClick={handleSearchName}
            className="btn btn-primary"
            type="button"
            id="button-addon2"
          >
            <i className="fa-solid fa-magnifying-glass" />
          </button>
        </div>
      </SectionAction>
      <SectionAction>
        <span>Gender</span>
        <select
          onChange={handleGender}
          className="form-select form-select-md"
          aria-label=".form-select-lg example"
          value={gender}
        >
          <option value="all">All</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </SectionAction>
      <button
        onClick={handleResetFilter}
        className="btn btn-outline-secondary"
        type="button"
        id="button-addon2"
      >
        Reset Filter
      </button>
    </Action>
    <DataTable>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Registered Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user: any) => (
            <tr key={`${user.login.username}`}>
              <td>{user.login.username || '-'}</td>
              <td>{user.name ? `${user.name.first} ${user.name.last}` : '-'}</td>
              <td>{user.email || '-'}</td>
              <td>{user.gender || '-'}</td>
              <td>
                {(user.registered?.date &&
                  dayjs(user.registered.date).format('DD-MM-YYYY HH:mm')) ||
                  '-'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </DataTable>
    <ContentPagination>
      <Pagination />
    </ContentPagination>
  </Container>
)

export default PageUserView
