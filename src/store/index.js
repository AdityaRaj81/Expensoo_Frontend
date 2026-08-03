import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authSlice";
import transactionReducer from "./transactionSlice";
import dashboardReducer from "./dashboardSlice";
import categoryReducer from "./categorySlice";
import reportReducer from "./reportSlice";

const store = configureStore({

  reducer: {

    auth: authReducer,

    transactions: transactionReducer,

    dashboard: dashboardReducer,

    categories: categoryReducer,

    reports: reportReducer,

  },

  devTools: import.meta.env.DEV,

});

export default store;