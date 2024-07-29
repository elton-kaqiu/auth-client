import axios from "axios";
import { toast } from "react-toastify";

const baseURL = process.env.SERVER_API;

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = token && `Bearer ${token}`;
    console.log(config.headers.Authorization);
    return config;
  },
  (error) => {
    console.log(`Request failed: ${error}`);
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    console.log(`Response returned: ${response}`);
    return response;
  },
  (error) => {
    if (error.response) {
      toast.error(`Error: ${error.response.data.message || error.message}`);
    } else if (error.request) {
      toast.error("Network error, please try again later.");
    } else {
      toast.error(`Error: ${error.message}`);
    }
    return Promise.reject(error);
  }
);

export default instance;
