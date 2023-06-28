import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

function setToken(newToken) {
  apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
}

function getEmployees() {
  return apiClient.get("/employees").then((res) => res.data);
}

function createEmployee(employee) {
  return apiClient.post("/employees", employee).then((res) => res.data);
}

function updateEmployee(id, employee) {
  return apiClient.put(`/employees/${id}`, employee).then((res) => res.data);
}

function deleteEmployee(id) {
  return apiClient.delete(`/employees/${id}`).then((res) => res.status);
}

export default {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  setToken,
};
