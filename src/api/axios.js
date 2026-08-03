import axios from "axios";

/**
 * ============================================================
 * Axios Instance
 * ============================================================
 *
 * Base Axios configuration used throughout the application.
 *
 * ============================================================
 */

const api = axios.create({

  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "http://localhost:8080/api",

  timeout: 30000,

  headers: {

    Accept: "application/json",

    "Content-Type": "application/json",

  },

  withCredentials: false,

});

export default api;