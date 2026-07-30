import api from "./api";

export const registerStudent = (data) => {
  return api.post("/register", data);
};

export const loginStudent = (data) => {
  return api.post("/login", data);
};

export const getDashboard = (id) => {
  return api.get(`/dashboard/${id}`);
};