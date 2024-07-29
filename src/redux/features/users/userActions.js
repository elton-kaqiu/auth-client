import { createAsyncThunk } from "@reduxjs/toolkit";
import client from "../../../helpers/client"; // Ensure this path is correct

// Fetch all users
export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await client.get("/users");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch a single user by ID
export const getUser = createAsyncThunk(
  "users/getUser",
  async (id, { rejectWithValue }) => {
    try {
      const response = await client.get(`/users/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Add a new user
export const addUser = createAsyncThunk(
  "users/addUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await client.post("/users", userData);
      const { token, user } = response.data;
      localStorage.setItem("token", token);
      return { token, user };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Change user password
export const changePassword = createAsyncThunk(
  "users/changePassword",
  async ({ id, password }, { rejectWithValue }) => {
    try {
      const response = await client.put(`/users/${id}/password`, { password });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Remove a user by ID
export const removeUser = createAsyncThunk(
  "users/removeUser",
  async (id, { rejectWithValue }) => {
    try {
      await client.delete(`/users/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// User login
export const userLogin = createAsyncThunk(
  "users/userLogin",
  async (loginData, { rejectWithValue }) => {
    try {
      const response = await client.post("/users/login", loginData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
