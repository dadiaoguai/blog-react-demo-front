import axios from 'axios'

export const actionType = {
  login: 'LOGIN',
  logout: 'LOGOUT'
}

export const  axiosInstance = axios.create({
  baseURL: 'http://localhost:5101/',
  withCredentials: true
})

