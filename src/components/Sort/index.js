import React, { useState } from 'react';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import './Sort.scss';

export default function Sort({ users, sortHandler }) {
  const [iconVisibilty, setIconVisibilty] = useState(true);

  return (
    <div className="sort-container">
      <span className="sort-icon-text">Sort by name</span>
      <FaSortAmountUp
        onClick={sortHandler}
        style={{ display: iconVisibilty ? 'initial' : 'none' }}
      />

      <FaSortAmountDown
        onClick={sortHandler}
        style={{ display: iconVisibilty ? 'none' : 'initial' }}
      />
    </div>
  );
}
