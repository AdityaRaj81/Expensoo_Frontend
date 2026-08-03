import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicOnlyRoute = ({ children }) => {
  const { isAuthenticated, initialized, user } = useSelector((state) => state.auth);

  if (!initialized) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-blue-600" />
      </div>
    );
  }

  if (isAuthenticated) {
    return <Navigate to={user?.role === "ADMIN" ? "/admin" : "/app"} replace />;
  }

  return children;
};

export default PublicOnlyRoute;