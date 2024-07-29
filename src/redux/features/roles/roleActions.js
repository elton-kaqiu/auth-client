import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../helpers/client"; // Ensure this path is correct

// Fetch all roles
export const getRoles = createAsyncThunk(
  "roles/getRoles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.get("/roles");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch a single role by ID
export const getRole = createAsyncThunk(
  "roles/getRole",
  async (id, { rejectWithValue }) => {
    try {
      const response = await client.get(`/roles/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add a new role
export const addRole = createAsyncThunk(
  "roles/addRole",
  async (role, { rejectWithValue }) => {
    try {
      const response = await client.post("/roles", role);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Edit an existing role
export const editRole = createAsyncThunk(
  "roles/editRole",
  async (role, { rejectWithValue }) => {
    try {
      const response = await client.put(`/roles/${role.id}`, role);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Remove a role by ID
export const removeRole = createAsyncThunk(
  "roles/removeRole",
  async (roleId, { rejectWithValue }) => {
    try {
      await client.delete(`/roles/${roleId}`);
      return roleId;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
