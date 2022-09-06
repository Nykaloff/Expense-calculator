import { combineReducers, configureStore } from '@reduxjs/toolkit'
import clientsReducer from '../redux/reducers/clientsSlice'
import proceduresReducer from './reducers/proceduresSlice';
import namesProceuresReducer from './reducers/namesProceduresSlice'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  } from 'redux-persist'

const RootReducer = combineReducers({
    clientsReducer,
    proceduresReducer,
    namesProceuresReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware,) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    
})

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof RootReducer>
export type AppDispatch = typeof store.dispatch