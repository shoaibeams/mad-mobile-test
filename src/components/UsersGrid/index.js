import React from 'react';
import UserCard from '../UserCard';
import './UsersGrid.scss';

const UsersGrid = ({ users }) => {
  console.log('usergrid', users);
  return (
    <div className="grid-container">
      <header className="App-header">
        {users
          ? users.map(user => {
              return <UserCard user={user} key={user.id.value} />;
            })
          : null}
      </header>
    </div>
  );
};

export default UsersGrid;
