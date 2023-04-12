import {
  createSlice,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../..';
import { User } from '../../../type/User';

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    setUser: (state: UserState, action) => {
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    resetState: () => {
      return initialState;
    },
  },
});

export default UserSlice.reducer;
export const {
  setUser,
  resetState,
} = UserSlice.actions;

export const selectUser = (state: RootState) => state.user.user;
