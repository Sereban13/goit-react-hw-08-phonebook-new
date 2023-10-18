import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './opetations';
import {
  handlePending,
  handleRegisterFulfilled,
  handleRejected,
  handleLogInFulfilled,
  handleLogOutFulfilled,
  handleRefreshUserPending,
  handleRefreshUserFulfilled,
  handleRefreshUserRejected,
} from 'redux/handlers';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(register.pending, handlePending)
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(register.rejected, handleRejected)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, handleLogInFulfilled)
      .addCase(logIn.rejected, handleRejected)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, handleLogOutFulfilled)
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, handleRefreshUserPending)
      .addCase(refreshUser.fulfilled, handleRefreshUserFulfilled)
      .addCase(refreshUser.rejected, handleRefreshUserRejected),
});
//   extraReducers: builder => {
//     builder
//       .addCase(register.pending, (state, action) => state)
//       .addCase(register.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(register.rejected, (state, action) => state)
//       .addCase(logIn.fulfilled, (state, action) => {
//         state.user = action.payload.user;
//         state.token = action.payload.token;
//         state.isLoggedIn = true;
//       })
//       .addCase(logOut.fulfilled, state => {
//         state.user = { name: null, email: null };
//         state.token = null;
//         state.isLoggedIn = false;
//       })
//       .addCase(refreshUser.pending, state => {
//         state.isRefreshing = true;
//       })
//       .addCase(refreshUser.fulfilled, (state, action) => {
//         state.user = action.payload;
//         state.isLoggedIn = true;
//         state.isRefreshing = false;
//       })
//       .addCase(refreshUser.rejected, state => {
//         state.isRefreshing = false;
//       });
//   },
// });

export const authReducer = authSlice.reducer;

// [register.fulfilled](state, action) {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// },
// [logIn.fulfilled](state, action) {
//   state.user = action.payload.user;
//   state.token = action.payload.token;
//   state.isLoggedIn = true;
// },
// [logOut.fulfilled](state) {
//   state.user = { name: null, email: null };
//   state.token = null;
//   state.isLoggedIn = false;
// },
// [refreshUser.pending](state) {
//   state.isRefreshing = true;
// },
// [refreshUser.fulfilled](state, action) {
//   state.user = action.payload;
//   state.isLoggedIn = true;
//   state.isRefreshing = false;
// },
// [refreshUser.rejected](state) {
//   state.isRefreshing = false;
// },
