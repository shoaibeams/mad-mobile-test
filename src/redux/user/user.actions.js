import { UserActionTypes } from './user.types';

export const fetchUsers = () => async dispatch => {
  if (!localStorage.users) {
    const response = await (
      await fetch('https://randomuser.me/api/?results=10')
    ).json();
    dispatch({
      type: UserActionTypes.GET_RANDOM_USERS,
      payload: response.results
    });
  } else {
    const users = JSON.parse(localStorage.getItem('users'));

    dispatch({
      type: UserActionTypes.GET_RANDOM_USERS,
      payload: users
    });
  }
};

export const updateUsers = updatedUsers => ({
  type: UserActionTypes.UPDATE_USERS,
  payload: updatedUsers
});

export const updateUser = async dispatch => {
  const users = fetchUsers();
  console.log('users', users);

  // let newUsers = users.filter(user => user.login.id !== newUser.id);
  // newUsers.unshift(newUser);
  // this.setState({ users: newUsers });

  return {
    type: UserActionTypes.UPDATE_USER,
    payload: ''
  };
};
