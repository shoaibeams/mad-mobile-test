import { UserActionTypes } from './user.types';

const INITIAL_STATE = {};

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log('action', action);

  switch (action.type) {
    case UserActionTypes.GET_RANDOM_USERS:
      return {
        ...state,
        data: action.payload
      };
    case UserActionTypes.UPDATE_USERS:
      return {
        ...state,
        filteredUsers: action.payload
      };
    default:
      return state;
  }
};
