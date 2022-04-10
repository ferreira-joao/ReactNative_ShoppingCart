import axios from "axios";

import { API_IP } from "@env";

const api = axios.create({
  baseURL: `http://${API_IP}:3000`,
});

console.log("API ACTIVE");

export default api;
