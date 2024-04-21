import { configureStore } from '@reduxjs/toolkit'
import type { TypedUseSelectorHook } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'

// Import Reducers
import authReducer from '~/features/Auth'
import patiantRedicer from '~/features/Patient'
import chatReducer from '~/features/Chat'

const store = configureStore({
  reducer: {
    auth: authReducer,
    patient: patiantRedicer,
    chat: chatReducer,
  }
})

// Declare Typed Definitions
type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store
