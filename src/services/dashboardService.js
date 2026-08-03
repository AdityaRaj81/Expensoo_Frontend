import api from "../api/interceptors";
import ENDPOINTS from "../api/endpoints";

/**
 * ============================================================
 * Dashboard Service
 * ============================================================
 *
 * Handles
 *
 * • Dashboard Summary
 * • Monthly Dashboard
 *
 * ============================================================
 */

const dashboardService = {

  /**
   * ============================================================
   * Get Dashboard
   * ============================================================
   */
  async getDashboard(month = null) {

    const response = await api.get(

      ENDPOINTS.DASHBOARD.BASE,

      {

        params: month

          ? {

            month,

          }

          : {},

      }

    );

    return response.data;

  },

};

export default dashboardService;