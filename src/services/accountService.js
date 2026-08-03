import api from "../api/interceptors";
import ENDPOINTS from "../api/endpoints";

/**
 * ============================================================
 * Account Service
 * ============================================================
 *
 * Handles
 *
 * • Current User Profile
 *
 * ============================================================
 */

const accountService = {

  /**
   * ============================================================
   * Get Current User
   * ============================================================
   */
  async getProfile() {

    const response = await api.get(

      ENDPOINTS.USERS.ME

    );

    return response.data;

  },

};

export default accountService;