import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  users: [];
}

export interface IUser {
  name: string;
}

const initialState: UserState = {
  users: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state, action: PayloadAction<[]>) {
      state.users = action.payload;
    },
  },
});

export const { getUsers } = usersSlice.actions;

export default usersSlice.reducer;
