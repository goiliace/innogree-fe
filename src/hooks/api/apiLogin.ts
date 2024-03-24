import axiosInstance from './axios'
import axios from 'axios'
import qs from 'qs'
interface LoginResponse {
  token: string
}

interface LoginError {
  message: string
}

const apiLogin = async (username: string, password: string): Promise<LoginResponse | LoginError> => {
  try {
    const response = await axiosInstance.post('/login', qs.stringify({ username, password }))

    return { token: response.data.token }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { message: error.response?.data.message || 'An error occurred during login.' }
    } else {
      return { message: 'An unexpected error occurred.' }
    }
  }
}

export default apiLogin
