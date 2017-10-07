import axios from 'axios'
import Markdown from 'markdown-it'
import hljs from 'highlight.js'

export const md = new Markdown({
  highlight(str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }

    return '' // use external default escaping
  },
})

export const actionType = {
  login: 'LOGIN',
  logout: 'LOGOUT',
}

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:5200/',
  withCredentials: true,
})

