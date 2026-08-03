import api from "../api/interceptors";
import ENDPOINTS from "../api/endpoints";

/**
 * ============================================================
 * Category Service
 * ============================================================
 *
 * Handles
 *
 * • Get User Categories
 *
 * ============================================================
 */

const categoryService = {

  /**
   * ============================================================
   * Get Categories
   * ============================================================
   */
  async getAll() {

    const response = await api.get(

      ENDPOINTS.CATEGORIES.BASE

    );

    return response.data;

  },

};

export default categoryService;