import {createSlice} from '@reduxjs/toolkit';
import {UserSliceState} from './userSlice.types.ts';
import {loginUser, logoutUser, refreshUser, registerUser} from './userThunk.ts';
import ApiStatuses from '../../../constants/ApiStatuses.ts';

const initialState: UserSliceState = {
  userInfo: null,
  token: null,
  errors: null,
  isLoading: ApiStatuses.initialStatus,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: builder => {
    // User login
    builder.addCase(loginUser.pending, state => {
      state.isLoading = ApiStatuses.requestStatus;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.isLoading = ApiStatuses.successStatus;
      state.token = action.payload.token;
      state.errors = null;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = ApiStatuses.failStatus;
      state.errors = action.payload;
    });
    // User register
    builder.addCase(registerUser.pending, state => {
      state.isLoading = ApiStatuses.requestStatus;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.isLoading = ApiStatuses.successStatus;
      state.token = action.payload.token;
      state.errors = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = ApiStatuses.failStatus;
      state.errors = action.payload;
    });
    // User refresh
    builder.addCase(refreshUser.pending, state => {
      state.isLoading = ApiStatuses.requestStatus;
    });
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.isLoading = ApiStatuses.successStatus;
      state.userInfo = action.payload;
      state.errors = null;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.isLoading = ApiStatuses.failStatus;
      state.errors = action.payload;
    });
    // User logout
    builder.addCase(logoutUser.pending, state => {
      state.isLoading = ApiStatuses.requestStatus;
    });
    builder.addCase(logoutUser.fulfilled, state => {
      state.isLoading = ApiStatuses.successStatus;
      state.userInfo = null;
      state.token = null;
      state.errors = null;
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.isLoading = ApiStatuses.failStatus;
      state.errors = action.payload;
    });
  },
});

export default userSlice.reducer;
export const {setToken} = userSlice.actions;
