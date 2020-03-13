import { UserActionTypes } from './user.types';

export const fetchUsers = (page = 1) => async dispatch => {
  if (!localStorage.users) {
    const response = await (
      await fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
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

export const fetchMoreUsers = (page = 1) => async dispatch => {
  debugger;
  const response = await (
    await fetch(`https://randomuser.me/api/?page=${page}&results=10&seed=abc`)
  ).json();

  debugger;
  dispatch({
    type: UserActionTypes.GET_MORE_USERS,
    payload: response.results
  });
};

export const updateUsers = updatedUsers => ({
  type: UserActionTypes.UPDATE_USERS,
  payload: updatedUsers
});
