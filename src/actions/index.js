import {actionType} from '../config'

export const login = (username, password) => {
  return {
    type: actionType.login,
    username,
    password
  } 
}

export const logout = () => {
  return {type: actionType.logout} 
}
