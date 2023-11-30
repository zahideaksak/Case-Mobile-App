import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface AuthStateData {
  name: string;
  surname: string;
  isLoggedIn: boolean;
}

const initialState: AuthStateData = {
  name: 'Zahide',
  surname: 'Aksak',
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLoginUser: (state, action: PayloadAction<any>) => {
      state = action.payload;
    },
    setLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {setLoginUser, setLoggedIn} = authSlice.actions;
export default authSlice.reducer;
