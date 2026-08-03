import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import PublicOnlyRoute from "../components/auth/PublicOnlyRoute";
import DesktopLayout from "../layouts/DesktopLayout";
import MobileLayout from "../layouts/MobileLayout";
import useResponsiveLayout from "../hooks/useResponsiveLayout";
import LandingPage from "../pages/public/LandingPage";
import LoginPage from "../pages/public/LoginPage";
import RegisterPage from "../pages/public/RegisterPage";
import ForgotPasswordPage from "../pages/public/ForgotPasswordPage";
import DashboardPage from "../pages/app/DashboardPage";
import TransactionsPage from "../pages/app/TransactionsPage";
import AddTransactionPage from "../pages/app/AddTransactionPage";
import EditTransactionPage from "../pages/app/EditTransactionPage";
import ReportsPage from "../pages/app/ReportsPage";
import AccountPage from "../pages/app/AccountPage";
import NotFoundPage from "../pages/NotFoundPage";

const AppRoutes = () => {
  const { isMobile } = useResponsiveLayout();
  const Layout = isMobile ? MobileLayout : DesktopLayout;

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<PublicOnlyRoute><LoginPage /></PublicOnlyRoute>} />
      <Route path="/register" element={<PublicOnlyRoute><RegisterPage /></PublicOnlyRoute>} />
      <Route path="/forgot-password" element={<PublicOnlyRoute><ForgotPasswordPage /></PublicOnlyRoute>} />

      <Route path="/app" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
        <Route index element={<DashboardPage />} />
        <Route path="transactions" element={<TransactionsPage />} />
        <Route path="transactions/add" element={<AddTransactionPage />} />
        <Route path="transactions/edit/:id" element={<EditTransactionPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="account" element={<AccountPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;