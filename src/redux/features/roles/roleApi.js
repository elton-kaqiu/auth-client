import client from "../../../helpers/client";

const fetchRoles = () => client.get("/roles");
const createRole = (role) => client.post("/roles", role);
const updateRole = (role) => client.put(`/roles/${role.id}`, role);
const deleteRole = (roleId) => client.delete(`/roles/${roleId}`);
const fetchRole = (roleId) => client.get(`/roles/${roleId}`);

export { fetchRoles, createRole, updateRole, deleteRole, fetchRole };
