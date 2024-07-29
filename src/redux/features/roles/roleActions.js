import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchRoles,
  fetchRole,
  createRole,
  updateRole,
  deleteRole,
} from "./roleApi";

export const getRoles = createAsyncThunk(
  `roles/getRoles`,
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchRoles();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getRole = createAsyncThunk(
  `roles/getRole`,
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetchRole(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const addRole = createAsyncThunk(
  `roles/addRole`,
  async (role, { rejectWithValue }) => {
    try {
      const response = await createRole(role);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const editRole = createAsyncThunk(
  `roles/editRole`,
  async (role, { rejectWithValue }) => {
    try {
      const response = await updateRole(role);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const removeRole = createAsyncThunk(
  `roles/removeRole`,
  async (roleId, { rejectWithValue }) => {
    try {
      await deleteRole(roleId);
      return roleId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
