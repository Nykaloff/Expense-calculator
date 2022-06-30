import { combineReducers, configureStore } from '@reduxjs/toolkit'
import clientsReducer from '../redux/reducers/clientsSlice'

const RootReducer = combineReducers({
    clientsReducer
})

export const store = configureStore({
  reducer: RootReducer
})

export type RootState = ReturnType<typeof RootReducer>
export type AppDispatch = typeof store.dispatch