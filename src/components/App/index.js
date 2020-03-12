import React, { useState } from 'react';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../redux/user/user.actions';
import './App.css';
import UsersGrid from '../UsersGrid';
import SearchBar from '../SearchBar';

const App = ({ fetchUsers, users }) => {
  const [filteredUsers, setUsers] = useState([]);

  useEffect(() => {
    console.log('Calling', users);
    fetchUsers();
  }, [users ? users.length : null]);
  // setUsers(users);

  const filterUsers = searchValue => {
    users =
      users.filter(user =>
        user.name.first.toLowerCase().includes(searchValue.toLowerCase())
      ) || [];

    console.log('newusers', users);
    setUsers(filteredUsers.concat(users));
    debugger;
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>Random Users Grid</p>
        <SearchBar filterUsers={filterUsers} />
        <UsersGrid users={filteredUsers.length > 0 ? filteredUsers : users} />
      </header>
    </div>
  );
};

const mapStateToProps = state => ({
  users: state.users.data
});

export default connect(mapStateToProps, { fetchUsers })(App);
