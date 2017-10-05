import { actionType } from '../config'

export const login = (username, password) => ({
  type: actionType.login,
  username,
  password,
})

export const logout = () => ({ type: actionType.logout })
