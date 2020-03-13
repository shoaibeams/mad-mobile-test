import React, { useState } from 'react';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import UserCard from '../UserCard';
import './UsersGrid.scss';
import { sortDesc, sortAsc } from '../../utils/utils';

const UsersGrid = ({ users }) => {
  const [iconVisibilty, setIconVisibilty] = useState(true);

  const sortHandler = () => {
    debugger;
    setIconVisibilty(!iconVisibilty);
    iconVisibilty ? sortDesc(users) : sortAsc(users);
  };

  return (
    <div className="grid">
      <span className="sort-icon-text">Sort by name</span>
      <FaSortAmountUp
        onClick={sortHandler}
        style={{ display: iconVisibilty ? 'initial' : 'none' }}
      />

      <FaSortAmountDown
        onClick={sortHandler}
        style={{ display: iconVisibilty ? 'none' : 'initial' }}
      />

      <header className="grid-container App-header">
        {users
          ? users.map(user => {
              return <UserCard key={user.login.uuid} user={user} />;
            })
          : null}
      </header>
    </div>
  );
};

export default UsersGrid;
