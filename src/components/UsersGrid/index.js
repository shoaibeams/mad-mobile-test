import React from 'react';
import UserCard from '../UserCard';
import './UsersGrid.scss';

const UsersGrid = ({ users }) => {
  return (
    <div className="">
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
