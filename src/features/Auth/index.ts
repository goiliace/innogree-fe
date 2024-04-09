import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User, Message, AuthState } from './types'

const initialState: AuthState = {
  isAuthenticated: false,
  isAuthenticating: true,
  user: null,
  token: null,
  message: {
    type: null,
    content: ''
  }
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload
    },
    setIsAuthenticating: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticating = action.payload
    },
    setToken: (state, action: PayloadAction<null | string>) => {
      state.token = action.payload
    },
    setUser: (state, action: PayloadAction<null | User>) => {
      state.user = action.payload
    },
    setMessage: (state, action: PayloadAction<Message>) => {
      state.message = action.payload
    }
  }
})

export const { setIsAuthenticated, setIsAuthenticating, setToken, setUser, setMessage } = authSlice.actions
export default authSlice.reducer
