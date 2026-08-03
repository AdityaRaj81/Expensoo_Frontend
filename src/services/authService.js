import api from "../api/interceptors";
import ENDPOINTS from "../api/endpoints";

const TOKEN_KEY = "token";
const USER_KEY = "user";

const authService = {
  async login(credentials) {
    const response = await api.post(ENDPOINTS.AUTH.LOGIN, {
      email: credentials.email.trim().toLowerCase(),
      password: credentials.password,
    });
    if (!response.data.success) throw new Error(response.data.message || "Login failed.");
    return response.data.data;
  },

  async register(userData) {
    const response = await api.post(ENDPOINTS.AUTH.SIGNUP, {
      ...userData,
      email: userData.email.trim().toLowerCase(),
    });
    if (!response.data.success) throw new Error(response.data.message || "Registration failed.");
    return response.data.data;
  },

  async getCurrentUser() {
    const response = await api.get(ENDPOINTS.USERS.ME);
    if (!response.data.success) throw new Error(response.data.message || "Unable to restore session.");
    return response.data.data;
  },

  saveAuth(token, user) {
    localStorage.setItem(TOKEN_KEY, token);
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  getStoredUser() {
    const user = localStorage.getItem(USER_KEY);
    if (!user) return null;
    try {
      return JSON.parse(user);
    } catch {
      return null;
    }
  },

  updateStoredUser(user) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  isAuthenticated() {
    return !!this.getToken();
  },

  getUserRole() {
    return this.getStoredUser()?.role || null;
  },

  isAdmin() {
    return this.getUserRole() === "ADMIN";
  },

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  },
};

export default authService;