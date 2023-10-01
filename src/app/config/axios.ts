import axios from 'axios'
axios.defaults.withCredentials = true

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'X-Requested-With': 'XMLHttpRequest'
  }
})

export default axiosInstance
