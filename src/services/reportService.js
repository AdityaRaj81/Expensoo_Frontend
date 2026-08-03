import api from "../api/interceptors";
import ENDPOINTS from "../api/endpoints";

/**
 * ============================================================
 * Report Service
 * ============================================================
 *
 * Handles
 *
 * • Monthly Report
 * • Custom Report
 *
 * ============================================================
 */

const reportService = {

  /**
   * ============================================================
   * Monthly Report
   * ============================================================
   */
  async getMonthlyReport(month = null) {

    const response = await api.get(

      ENDPOINTS.REPORTS.MONTHLY,

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

  /**
   * ============================================================
   * Custom Report
   * ============================================================
   */
  async getCustomReport(startDate, endDate) {

    const response = await api.get(

      ENDPOINTS.REPORTS.CUSTOM,

      {

        params: {

          startDate,

          endDate,

        },

      }

    );

    return response.data;

  },

};

export default reportService;