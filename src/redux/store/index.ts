import {Action, combineReducers, configureStore} from '@reduxjs/toolkit';
import thunk, {ThunkAction} from 'redux-thunk';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import authReducer from '../slices/authSlice';
import locationReducer from '../slices/locationSlice';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

let rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    system: persistedReducer,
  },
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type TypedThunk<R = void> = ThunkAction<R, RootState, unknown, Action>;

export const persistor = persistStore(store);
