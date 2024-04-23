// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

import post from './slices/postSlice'
import album from './slices/albumSlice'

export const store = configureStore({
    reducer: {
     post,
     album
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      })
})