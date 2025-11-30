import axios from "axios";

const API_KEY = "d4f69ceb24d3be49a085b07ea917b52c";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Optional: automatically attach API key to every request
instance.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params["api_key"] = API_KEY;
  return config;
});

export default instance;