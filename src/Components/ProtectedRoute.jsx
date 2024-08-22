import { useAuth } from "@/hooks/useAuth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const { userDetails } = useAuth();
  const location = useLocation();
  return userDetails?.token ? (
    <Outlet />
  ) : (
    <Navigate to={"login"} state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
