import { UserActionTypes } from './user.types'

export const fetchUsers = () => async dispatch => {
    const response = await (await fetch('https://randomuser.me/api/')).json()
    console.log(response)
    dispatch({ type: UserActionTypes.GET_RANDOM_USERS, payload: response })
  }