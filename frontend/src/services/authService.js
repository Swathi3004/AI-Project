import api from "./api";

const API = "http://127.0.0.1:5000/api";

export const registerStudent = (data) => {
  return api.post("/register", data);
};

export const loginStudent = (data) => {
  return api.post("/login", data);
};

export const getDashboard = (id) => {
  return api.get(`/dashboard/${id}`);
};

export const getProfile = (id) => {
  return api.get(`/profile/${id}`);
};

export const updateProfile = (id, data) => {
  return api.put(`/profile/${id}`, data);
};

export const getQuizzes = () => {
  return api.get("/quizzes");
};

export const submitQuiz = (data) => {
  return api.post("/submit-quiz", data);
};

export const getQuizResult = (studentId) => {
  return api.get(`/quiz-result/${studentId}`);
};

export const getPerformanceHistory = (studentId) => {
  return api.get(`/performance-history/${studentId}`);
};

export const chatWithAI = (message) => {
  return api.post("/chat", {
    message,
  });
};




