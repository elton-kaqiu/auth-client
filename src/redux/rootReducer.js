import { combineReducers } from "@reduxjs/toolkit";
import usersSlice from "./features/users/usersSlice";
import roleSlice from "./features/roles/roleSlice";

const rootReducer = combineReducers({
  users: usersSlice,
  roles: roleSlice,
});

export default rootReducer;
