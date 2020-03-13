import React, { useState } from 'react';
import './Pagination.scss';
import { fetchUsers } from '../../redux/user/user.actions';

const Pagination = () => {
  const [PageNumber, setPageNumber] = useState(1);

  const paginationHandlerLeft = () => {
    const pages = PageNumber - 1;

    setPageNumber(pages);
    fetchUsers(PageNumber);
  };

  const paginationHandlerRight = () => {
    const pages = PageNumber + 1;

    setPageNumber(pages);
    fetchUsers(PageNumber);
  };

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
