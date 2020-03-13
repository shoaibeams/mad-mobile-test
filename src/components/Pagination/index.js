import React from 'react';
import './Pagination.scss';

const Pagination = ({ paginationHandlerLeft, paginationHandlerRight }) => {
  return (
    <div className="pagination">
      <a href="#" onClick={paginationHandlerLeft}>
        ❮
      </a>

      <a href="#" onClick={paginationHandlerRight}>
        ❯
      </a>
    </div>
  );
};

export default Pagination;
