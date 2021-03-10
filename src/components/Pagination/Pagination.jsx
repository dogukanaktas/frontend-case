import ReactPaginate from 'react-paginate'

import './Pagination.scss'

const Pagination = ({ pageCount, onPageChange }) => (
  <ReactPaginate
    previousLabel={'Prev'}
    nextLabel={'Next'}
    pageCount={pageCount}
    onPageChange={onPageChange}
    containerClassName={'paginationButtons'}
    previousLinkClassName={'prevButton'}
    nextLinkClassName={'nextButton'}
    disabledClassName={'paginationDisabled'}
    activeClassName={'paginationActive'}
    pageRangeDisplayed={pageCount}
    marginPagesDisplayed={1}
  />
)

export default Pagination
