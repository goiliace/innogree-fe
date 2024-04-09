import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8123'
  // baseURL: 'https://1b5169291d85f2.lhr.life'
})

export default axiosInstance
