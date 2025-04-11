// src/services/api.js
import axios from "axios";

const API_BASE = "http://localhost:8080/api";

export const fetchMovies = () => {
  return axios.get(`${API_BASE}/films`);
};
