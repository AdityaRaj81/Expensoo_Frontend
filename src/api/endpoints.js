/**
 * ============================================================
 * API Endpoints
 * ============================================================
 *
 * Centralized backend endpoint definitions.
 *
 * ============================================================
 */

const ENDPOINTS = {

  AUTH: {

    LOGIN: "/auth/login",

    SIGNUP: "/auth/signup",

  },

  USERS: {

    ME: "/users/me",

  },

  TRANSACTIONS: {

    BASE: "/transactions",

    BY_ID: (id) => `/transactions/${id}`,

  },

  DASHBOARD: {

    BASE: "/dashboard",

  },

  CATEGORIES: {

    BASE: "/categories",

  },

  REPORTS: {

    MONTHLY: "/reports/monthly",

    CUSTOM: "/reports/custom",

  },

};

export default ENDPOINTS;