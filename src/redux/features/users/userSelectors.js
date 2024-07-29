import { createSelector } from '@reduxjs/toolkit';

// Basic selectors
export const selectUsersState = (state) => state.users;

// Selector to get all users
export const selectUsers = createSelector(
  [selectUsersState],
  (usersState) => usersState.users
);

// Selector to get user by ID
export const selectUserById = (userId) => createSelector(
  [selectUsers],
  (users) => users.find(user => user.id === userId)
);

// Selector to get the loading state for users
export const selectUsersLoading = createSelector(
  [selectUsersState],
  (usersState) => usersState.loading
);

// Selector to get any error related to users
export const selectUsersError = createSelector(
  [selectUsersState],
  (usersState) => usersState.error
);

// Selector to get the current user (if applicable, e.g., from login state)
export const selectCurrentUser = createSelector(
  [selectUsersState],
  (usersState) => usersState.currentUser
);
