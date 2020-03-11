import { UserActionTypes } from './user.types'

export const fetchUsers = () => async dispatch => {
    const response = await (await fetch('https://randomuser.me/api/?results=100')).json()
    console.log("res", response)
    dispatch({ type: UserActionTypes.GET_RANDOM_USERS, payload: response.results })
  } 