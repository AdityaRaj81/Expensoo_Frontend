import api from "../api/interceptors";
import ENDPOINTS from "../api/endpoints";

const transactionService = {

  async getAll({
    page = 0,
    size = 20,
    search = "",
    type = "",
    category = "",
    fromDate = "",
    toDate = "",
    dateSort = "desc",
    amountSort = "",
  } = {}) {

    const params = {
      page,
      size,
      dateSort,
    };

    if (search.trim()) {
      params.search = search.trim();
    }

    if (type) {
      params.type = type;
    }

    if (category) {
      params.category = category;
    }

    if (fromDate) {
      params.fromDate = fromDate;
    }

    if (toDate) {
      params.toDate = toDate;
    }

    if (amountSort) {
      params.amountSort = amountSort;
    }

    const response = await api.get(
      ENDPOINTS.TRANSACTIONS.BASE,
      {
        params,
      }
    );

    return response.data;
  },

  async getById(id) {

    const response = await api.get(
      ENDPOINTS.TRANSACTIONS.BY_ID(id)
    );

    return response.data;
  },

  async create(transactionData) {

    const response = await api.post(
      ENDPOINTS.TRANSACTIONS.BASE,
      transactionData
    );

    return response.data;
  },

  async update(id, transactionData) {

    const response = await api.put(
      ENDPOINTS.TRANSACTIONS.BY_ID(id),
      transactionData
    );

    return response.data;
  },

  async remove(id) {

    const response = await api.delete(
      ENDPOINTS.TRANSACTIONS.BY_ID(id)
    );

    return response.data;
  },

};

export default transactionService;