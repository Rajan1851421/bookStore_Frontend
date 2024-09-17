import { configureStore } from '@reduxjs/toolkit'
import loginSlice from '../features/loginSlice.js'
import bookSlice from '../features/bookSlice.js'

export const store = configureStore({
  reducer: {
    login: loginSlice,
    book:bookSlice,
  },
})