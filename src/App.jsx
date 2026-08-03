import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Toaster } from "react-hot-toast";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/common/ScrollToTop";
import { restoreSession } from "./store/authSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(restoreSession());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </BrowserRouter>
  );
}

export default App;