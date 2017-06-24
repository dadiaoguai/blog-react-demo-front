import {actionType} from '../config'
const Account = (state = {}, action) => {
  switch (action.type) {
    case actionType.login:
      return {
        username: action.username,
        password: action.password
      }
    default:
      return state
  }
}

export default Account
