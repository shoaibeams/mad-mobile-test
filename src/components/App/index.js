import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, updateUsers } from '../../redux/user/user.actions';
import './App.css';
import UsersGrid from '../UsersGrid';
import SearchBar from '../SearchBar';

const App = ({ fetchUsers, users, updateUsers, newUsers }) => {
  useEffect(() => {
    fetchUsers();
  }, [users ? users.length : null]);

  const filterUsers = searchValue => {
    users =
      users.filter(user =>
        user.name.first.toLowerCase().includes(searchValue.toLowerCase())
      ) || [];
    updateUsers(users);
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Random Users Grid</p>
        <SearchBar filterUsers={filterUsers} />
        <UsersGrid users={newUsers ? newUsers : users} />
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.data,
  newUsers: state.users.filteredUsers
});

export default connect(mapStateToProps, { fetchUsers, updateUsers })(App);
