import axios from 'axios'

const { REACT_APP_TODOS_BASE_URL } = process.env

export const http_get = axios.create({
  method: 'GET',
  baseURL: REACT_APP_TODOS_BASE_URL,
})

export const http_delete = axios.create({
  method: 'DELETE',
  baseURL: REACT_APP_TODOS_BASE_URL,
})

export const http_patch = axios.create({
  method: 'PATCH',
  baseURL: REACT_APP_TODOS_BASE_URL,
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
