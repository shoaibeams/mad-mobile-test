import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  
}

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log("state", state)
  console.log("action", action)
  const s = action.payload
  console.log("test", s)

  switch (action.type) {
    case UserActionTypes.GET_RANDOM_USERS:
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}