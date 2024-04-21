import axios from 'axios'
import { URL } from './constants'
const axiosInstance = axios.create({
  baseURL: URL
  // baseURL: 'http://27.64.194.193:3030'
})

export default axiosInstance
