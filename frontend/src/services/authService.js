import api from "./api";

export const registerStudent = (data) => {
  return api.post("/register", data);
};