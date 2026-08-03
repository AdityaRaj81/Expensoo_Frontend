import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDashboard } from "../store/dashboardSlice";

const useDashboard = () => {

  const dispatch = useDispatch();

  const {
    dashboard,
    loading,
    error,
  } = useSelector((state) => state.dashboard);

  useEffect(() => {

    dispatch(fetchDashboard());

  }, [dispatch]);

  return {

    dashboard,

    loading,

    error,

    refreshDashboard: () => dispatch(fetchDashboard()),

  };

};

export default useDashboard;