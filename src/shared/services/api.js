import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com", // example public API for testing
  headers: { "Content-Type": "application/json" }
});

export default api;
