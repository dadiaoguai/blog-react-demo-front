import axios from 'axios'
import Marked from 'marked'

export const actionType = {
  login: 'LOGIN',
  logout: 'LOGOUT'
}

export const  axiosInstance = axios.create({
  baseURL: 'http://localhost:5200/',
  withCredentials: true
})

export const marked = Marked.setOptions({
  highlight (code) {
    return require('highlight.js').highlightAuto(code).value;
  }
})

