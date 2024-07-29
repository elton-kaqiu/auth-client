import client from "../../../helpers/client";

const fetchUsers = () => client.get(`/users`);

const createUser = (userData) => client.post(`/users`, userData);

const updatePassword = (id, password) =>
  client.patch(`/users/${id}`, { password });

const deleteUser = (id) => client.delete(`/users/${id}`);

const fetchUser = (id) => client.get(`/users/${id}`);

const login = (loginData) => client.post(`/users/login`, loginData);

export { fetchUsers, createUser, updatePassword, deleteUser, fetchUser, login };
