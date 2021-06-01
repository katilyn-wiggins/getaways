import PropTypes from 'prop-types'; 
import React from 'react'; 

export default function Pagination({ onClick, currentPage, lastPage }) {
  return (
    <nav>
      <button
          onClick={onClick}
          value="previous"
          name="previous"
          disabled={currentPage <= 1}
          >
            Previous
          </button>
      <h2>{currentPage}</h2>
      <button 
        onClick={onClick}
        value="next"
        name="next"
        // disabled={currentPage >= lastPage}
        >
          next
        </button>
    </nav>
  )
}

Pagination.propTypes = { 
  onClick: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired
}; 

