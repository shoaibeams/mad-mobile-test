import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers, updateUsers } from '../../redux/user/user.actions';
import './App.css';
import UsersGrid from '../UsersGrid';
import SearchBar from '../SearchBar';
import { saveInLocalStorage } from '../../utils/utils';

const App = ({ fetchUsers, users, updateUsers, newUsers }) => {
  useEffect(() => {
    fetchUsers();
    saveInLocalStorage(users);
  }, [users ? users.length : null]);

  const filterUsers = searchValue => {
    users =
      users.filter(
        user =>
          user.name.first.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.name.last.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.phone.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.email.toLowerCase().includes(searchValue.toLowerCase()) ||
          user.location.city
            .toLowerCase()
            .includes(searchValue.toLowerCase()) ||
          user.location.country
            .toLowerCase()
            .includes(searchValue.toLowerCase())
      ) || [];
    updateUsers(users);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Users</h1>
        <SearchBar filterUsers={filterUsers} />
        <UsersGrid users={newUsers ? newUsers : users} />
        {fetchUsers && users ? (
          fetchUsers.length === 0 && users.length === 0 ? (
            <h1 className="no-users">No users found.</h1>
          ) : null
        ) : null}
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.data,
  newUsers: state.users.filteredUsers
});

export default connect(mapStateToProps, { fetchUsers, updateUsers })(App);
