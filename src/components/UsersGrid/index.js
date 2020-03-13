import React, { useState } from 'react';
import { FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import UserCard from '../UserCard';
import './UsersGrid.scss';
import { sortDesc, sortAsc } from '../../utils/utils';

const UsersGrid = ({ users }) => {
  const [iconVisibilty, setIconVisibilty] = useState(true);

  const sortHandler = () => {
    setIconVisibilty(!iconVisibilty);
    iconVisibilty ? sortDesc(users) : sortAsc(users);
  };

  return (
    <div className="grid sortIcon">
      <FaSortAmountUp
        onClick={sortHandler}
        style={{ display: iconVisibilty ? 'initial' : 'none' }}
        className="sortIcon"
      />
      <FaSortAmountDown
        onClick={sortHandler}
        style={{ display: iconVisibilty ? 'none' : 'initial' }}
        className="sortIcon"
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
