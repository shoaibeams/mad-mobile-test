import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../redux/user/user.actions';
import './UserInput.scss';

function UserInput({ value, name, login, editButtonClicked, users }) {
  const [inputs, setInputs] = useState({});

  const handleInputChange = event => {
    event.persist();
    setInputs(inputs => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const handleBlur = (name, newValue) => {
    console.log('users', users);
    console.log('users', login);
    const selectedUser = users.filter(
      user => user.login.uuid === login.uuid
    )[0];

    if (newValue) {
      selectedUser[name] = newValue;
      users.splice(users.indexOf(selectedUser), 1);
      users.unshift(selectedUser);
    }

    debugger;
    saveInLocalStorage(users);
  };

  const saveInLocalStorage = users => {
    if (users) {
      localStorage.setItem('users', JSON.stringify(users));
    }
  };

  return (
    <input
      type="text"
      value={inputs[name] || inputs[name] === '' ? inputs[name] : value}
      onChange={handleInputChange}
      disabled={editButtonClicked ? false : true}
      name={name}
      onBlur={handleBlur(name, inputs[name])}
    ></input>
  );
}

const mapStateToProps = state => ({
  users: state.users.data
});

export default connect(mapStateToProps, { updateUser })(UserInput);
