import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '~/lib/api/axios'

import { setIsAuthenticated, setIsAuthenticating, setToken, setUser, setMessage } from '.'
import type { BaseUser, User } from './types'

export const login = createAsyncThunk('auth/login', async (user: BaseUser, { dispatch }) => {
  dispatch(setIsAuthenticating(true))
  try {
    const response = await axiosInstance.post('/login', user)
    if (!response.data?.token) {
      throw new Error('Token not found')
    }
    const { token } = response.data
    console.log(token)

    dispatch(validateUser(token))
  } catch (error: any) {
    dispatch(setMessage({ type: 'error', content: error.response.data.detail }))
    dispatch(setToken(null))
    dispatch(setUser(null))
    dispatch(setIsAuthenticated(false))
  }
})
export const validateUser = createAsyncThunk('auth/validateUser', async (token: any, { dispatch }) => {
  // Set Is Authenticating `true`
  dispatch(setIsAuthenticating(true))

  try {
    // If Token Doesn't Exist
    if (!token) {
      throw new Error('User Not Found')
    }

    const res = await axiosInstance.get('/user', { headers: { Authorization: `Bearer ${token}` } })

    // If Error or User Doesn't Exist
    if (!res?.data) {
      throw new Error('User Not Found')
    }

    const user = res.data

    // Save `token` & `user` to localStorage
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(user))
    // to cokies
    // Cookies.set('token', token, { expires: 7, secure: true })
    // Cookies.set('user', JSON.stringify(user), { expires: 7, secure: true })

    // Dispatch `authReducer` Values to Redux Store
    dispatch(setIsAuthenticated(true))
    dispatch(setToken(token))
    dispatch(setUser(user))
    // Set Is Authenticating `false`
    dispatch(setIsAuthenticating(false))
  } catch (err) {
    console.error(err)

    // Dispatch `authReducer` Values to Redux Store
    dispatch(setIsAuthenticated(false))
    dispatch(setToken(null))
    dispatch(setUser(null))

    // Set Is Authenticating `false`
    dispatch(setIsAuthenticating(false))
  }
})
export const logout = createAsyncThunk('auth/logout', async (_, { dispatch }) => {
  // Set Is Authenticating `true`
  dispatch(setIsAuthenticating(true))

  // Clear localStorage
  // Cookies.remove('token')
  // Cookies.remove('user')
  localStorage.removeItem('token')
  localStorage.removeItem('user')

  // Dispatch `authReducer` Values to Redux Store
  dispatch(setIsAuthenticated(false))
  dispatch(setToken(null))
  dispatch(setUser(null))

  // Set Is Authenticating `false`
  dispatch(setIsAuthenticating(false))
})

export const register = createAsyncThunk('auth/register', async (user: User, { dispatch }) => {
  dispatch(setMessage({ type: null, content: '' }))
  try {
    const response = await axiosInstance.post('/register', user)
    // check status 201
    if (response.status === 201) {
      dispatch(setMessage({ type: 'success', content: 'Register success' }))
    }
  } catch (error: any) {
    console.log(error.response.data.detail)

    dispatch(setMessage({ type: 'error', content: error.response.data.detail }))
  }
})
// export const resetMessage = createAsyncThunk('auth/resetMessage', async (_, { dispatch }) => {
//   dispatch(setMessage({ type: null, content: '' }))
// })
