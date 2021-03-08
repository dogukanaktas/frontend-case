import axios from "axios";

const { REACT_APP_TODOS_BASE_URL } = process.env;

export const http_get = axios.create({
  method: "GET",
  baseURL: REACT_APP_TODOS_BASE_URL,
});
