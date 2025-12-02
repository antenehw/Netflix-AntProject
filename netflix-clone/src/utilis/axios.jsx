import axios from "axios";



const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

// Optional: automatically attach API key to every request
// instance.interceptors.request.use((config) => {
//   config.params = config.params || {};
//   config.params["api_key"] = API_KEY;
//   return config;
// });

export default instance;