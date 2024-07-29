import { createSlice } from "@reduxjs/toolkit";
import {
  getRoles,
  getRole,
  addRole,
  editRole,
  removeRole,
} from "./roleActions";

const initialState = {
  roles: [],
  currentRole: null,
  loading: false,
  error: null,
};

const roleSlice = createSlice({
  name: "roles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle getRoles
      .addCase(getRoles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRoles.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = action.payload;
      })
      .addCase(getRoles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle getRole
      .addCase(getRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getRole.fulfilled, (state, action) => {
        state.loading = false;
        state.currentRole = action.payload;
      })
      .addCase(getRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle addRole
      .addCase(addRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addRole.fulfilled, (state, action) => {
        state.loading = false;
        state.roles.push(action.payload);
      })
      .addCase(addRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle editRole
      .addCase(editRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editRole.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = state.roles.map((role) =>
          role.id === action.payload.id ? action.payload : role
        );
      })
      .addCase(editRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Handle removeRole
      .addCase(removeRole.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeRole.fulfilled, (state, action) => {
        state.loading = false;
        state.roles = state.roles.filter((role) => role.id !== action.payload);
      })
      .addCase(removeRole.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default roleSlice.reducer;
