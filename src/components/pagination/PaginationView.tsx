import React from 'react'

type PaginationProps = {
  currentPage?: number
  sizeLimit?: number
  onClick?: (page: number) => void
}

const PaginationView = ({ currentPage = 1, sizeLimit = 3, onClick }: PaginationProps) => (
  <nav aria-label="Page navigation example">
    <ul className="pagination mb-0">
      {Array.from(Array(sizeLimit).keys()).map((value) => {
        const page = value + 1
        return (
          <li key={`${page}`} className={`page-item ${page === currentPage && 'active'}`}>
            <button onClick={() => onClick && onClick(page)} type="button" className="page-link">
              {page}
            </button>
          </li>
        )
      })}
    </ul>
  </nav>
)

export default PaginationView
