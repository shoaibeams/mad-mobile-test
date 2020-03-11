import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
  
}

export const userReducer = (state = INITIAL_STATE, action) => {
  console.log("action", action.payload)
  const s = action.payload
  console.log("test", s)

  switch (action.type) {
    case UserActionTypes.GET_RANDOM_USERS:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}