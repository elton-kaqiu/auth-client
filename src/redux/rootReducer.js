import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./features/users/usersSlice";
import roleSlice from "./features/roles/roleSlice";

const rootReducer = combineReducers({
  users: userSlice,
  roles: roleSlice,
});

export default rootReducer;
